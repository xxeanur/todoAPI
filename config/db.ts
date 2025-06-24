//config içinde Uygulama konfigürasyonları (veritabanı bağlantısı, auth ayarları).

import mongoose from 'mongoose';
//veritabanına bağlan
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
    process.exit(1);//programı durdur, işlemi sonlandır
  }
};


