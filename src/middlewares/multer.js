import multer from 'multer';
const storage = multer.diskStorage({
      destination: './src/public/img/productos',
      filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`);
      },
});
const upload = multer({ storage: storage });

export { upload };
