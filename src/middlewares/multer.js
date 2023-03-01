import multer from "multer";

// Configuración de almacenamiento para Multer
const storage = multer.diskStorage({
  // La carpeta de destino para guardar los archivos subidos
  destination: "./src/public/img/productos",

  // El nombre del archivo subido se compone de la fecha y el nombre original
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Crear una instancia de Multer con la configuración de almacenamiento
const upload = multer({ storage: storage });

// Exportar la instancia de Multer
export { upload };
