export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
) => {
  if (!file) return callback(new Error('File is required'), '');

  const fileExtension = file.mimetype.split('/')[1];
  const originalName = file.originalname.split('.')[0];
  const sanitizedName = originalName.replace(/\s+/g, '_');
  const fileName = `${Date.now()}-${sanitizedName}.${fileExtension}`;

  callback(null, fileName);
};
