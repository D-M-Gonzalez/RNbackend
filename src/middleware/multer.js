import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({  
    destination: './public/images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + file.originalname )
    }
});

export const upload = multer({ storage: storage});