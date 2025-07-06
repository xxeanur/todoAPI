//mapper tanımı
import { createMap, createMapper, forMember, mapFrom, } from '@automapper/core';
import { classes } from '@automapper/classes';//DTO ve entity class şeklinde olmalı
import CreateUserDTO from '../../DTOs/CreateUserDTO';//istemciden gelen username, email, password vs.
import { User } from '../../entities/User';// Bu sınıf, MongoDB'de kaydedilecek veri YAPISINI temsil eder.

// Mapper objesini oluşturuyoruz. Burada 'classes()' stratejisini kullanıyoruz,
// yani class-to-class (sınıftan sınıfa) dönüşüm yapacak.
export const mapper = createMapper({
  strategyInitializer: classes(),
})

createMap( //User sınıfından CreateUserDTO'ya otomatik dönüşüm tanımlar.
  mapper, //veritabanından gelen User nesnesini frontende göndermeden DTOya çeviriyoruz.
  User,
  CreateUserDTO
);

//frontend'en gelen veri veritabanına uygun hale getirildi.
createMap(
  mapper,
  CreateUserDTO,
  User,
  forMember(
    (destination) => destination.createdAt, // hedef objedeki alan
    mapFrom(() => new Date()) // bu alanı set ediyoruz burada tarih objesiyle
  ),
);


// Burada CreateUserDTO'dan User'a dönüşüm haritası oluşturuyoruz.
// createMap fonksiyonu 3 parametre alıyor:
// 1- mapper nesnesi,
// 2- kaynak sınıf (DTO),
// 3- hedef sınıf (Entity/Model),
// 4- isteğe bağlı olarak hedef property’lerin nasıl doldurulacağını belirten ayarlar.


// forMember ile User sınıfındaki 'createdAt' alanını,
// DTO'dan değil, doğrudan yeni bir Date objesi olarak set ediyoruz.
// Yani kullanıcıdan gelen veri içinde createdAt yok, biz burada otomatik oluşturuyoruz.

