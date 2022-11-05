const Discord = require("discord.js-selfbot");
const ayarlar = require('./ayarlar.json');
const client = new Discord.Client();                        

var token = ayarlar.token;
var prefix = ayarlar.prefix;
var sunucuid = ayarlar.sunucuid;
var huntkanal = ayarlar.huntkanal;
var battlekanal = ayarlar.battlekanal;
var praykanal = ayarlar.praykanal;
var owokanal = ayarlar.owokanal;
var sendid = ayarlar.sendid;
var prayid = ayarlar.prayid;
var cookieid = ayarlar.cookieid;
var owosure = ayarlar.owosure;
var owobotid = (`408785106942164992`);

client.login(token)

client.on('message', async msg => { 
  if (msg.guild != sunucuid) return;

  if (msg.guild = sunucuid) {
    const kelime1 = ["captcha"]
    const kelime2 = ["verify"]
    const owobott = ("408785106942164992")
    const kanalisim = msg.channel.name;
 
    if (msg.author.id != owobott.includes(msg)) {
      if (kelime1.some(b => msg.content.includes(b))) {
        console.log(`\n`)
        console.log(`\x1b[31m`,`     ${kanalisim} kanalına doğrulama geldiği için bot yeniden başlatıldı.`,`\x1b[0m`)
        msg.channel.send(`>>> <@${ayarlar.sahip}> Hesaba doğrulama geldi. En kısada doğrulama yapınız.\nBütün fonksiyonlar durduruldu.`)
        setTimeout(() => {
          process.exit(0);
           }, 2000)
      }
    }
 
    if (msg.author.id != owobott.includes(msg)) {
      if (kelime2.some(b => msg.content.includes(b))) {
        console.log(`\n`)
        console.log(`\x1b[31m`,`     ${kanalisim} kanalına doğrulama geldiği için bot yeniden başlatıldı.`,`\x1b[0m`)
        msg.channel.send(`>>> <@${ayarlar.sahip}> Hesaba doğrulama geldi. En kısada doğrulama yapınız.\nBütün fonksiyonlar durduruldu.`)
        setTimeout(() => {
          process.exit(0);
           }, 2000)
      }
    }
    
    if (!msg.content.startsWith(prefix)) return undefined;
    if (msg.author.id != ayarlar.sahip) return msg.channel.send(`>>> \`${ayarlar.sahiptag}\` Dışında kimse beni kullanamaz! İkile güzelim!`)

    const args = msg.content.split(' ');
    const hunt = msg.client.channels.cache.get(huntkanal);
    const battle = msg.client.channels.cache.get(battlekanal);
    const praykanali = msg.client.channels.cache.get(praykanal);
    const owomesaj = msg.client.channels.cache.get(owokanal);
    const send = msg.client.users.cache.get(sendid);
    const prayy = msg.client.users.cache.get(prayid);
    const cookie = msg.client.users.cache.get(cookieid);
    const owosuresi = owosure;
    const owobot = msg.client.users.cache.get(owobotid); 

    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
    
    if (command === `başlat`) {
      
      if (args[1] === `hepsi`) {
        
        msg.channel.send(`${hunt} kanalına \`14-31 saniye\` arasında __**owo hunt**__ yazılacak. \n${battle} kanalına \`14-31 saniye\` arasında __**owo battle**__ yazılacak. \n${praykanali} kanalına \`5-7 dakika\` arasında __**owo pray ${prayy}**__ yazılacak. \n\n**NOT:**  Komutlar çalışmıyorsa \`ayarlar.json\` dosyasındaki bilgilerin doğruluğunu kontrol ediniz.`)

        hunt.send(`owo hunt`)
        setInterval(() => {
          
          hunt.send(`owo hunt`)
          
           }, Math.floor(Math.random() * (31000 - 14000)) + 14000)

        battle.send(`owo battle`)
        setInterval(() => {
          battle.send(`owo battle`)
           }, Math.floor(Math.random() * (31000 - 14000)) + 14000)

        praykanali.send(`owo pray ${prayy}`)
        setInterval(() => {
          praykanali.send(`owo pray ${prayy}`)
           }, Math.floor(Math.random() * (425000 - 305000)) + 305000)
        
        owomesaj.send('OwO')
        setInterval(() => {
        owomesaj.send('OwO')
             }, owosuresi*1000)
      }
      if (args[1] === `hunt`) {
        if (msg.channel != hunt) {
          msg.channel.send(`${hunt} kanalına \`14-31 saniye\` arasında __**owo hunt**__ yazılacak. \n\n**NOT:** Komutlar çalışmıyorsa \`ayarlar.json\` dosyasındaki bilgilerin doğruluğunu kontrol ediniz.`)
        }
  
        if (msg.channel = hunt) {
          msg.channel.send(`**Hunt** komutu başlatıldı. Bu kanala \`14-31 saniye\` arasında __**owo hunt**__ yazılacak.`)
        }
  
        hunt.send('owo hunt')
        setInterval(() => {
          hunt.send('owo hunt')
           }, Math.floor(Math.random() * (31000 - 14000)) + 14000) 
      }
      if (args[1] === `battle`) {
        if (msg.channel != battle) {
          msg.channel.send(`${battle} kanalına \`14-31 saniye\` arasında __**owo battle**__ yazılacak.  \n\n**NOT:** Komutlar çalışmıyorsa \`ayarlar.json\` dosyasındaki bilgilerin doğruluğunu kontrol ediniz.`)
        }
  
        if (msg.channel = battle) {
          msg.channel.send(`**Battle** komutu başlatıldı. Bu kanala \`14-31 saniye\` arasında __**owo battle**__ yazılacak.`)
        }
  
          battle.send('owo battle')
          setInterval(() => {
            battle.send('owo battle')
             }, Math.floor(Math.random() * (31000 - 14000)) + 14000)
      }
      if (args[1] === `pray`) {
        if (msg.channel != praykanali) {
          msg.channel.send(`${praykanali} kanalına \`5-7 dakika\` arasında __**owo pray ${prayy}**__ yazılacak.  \n\n**NOT:** Komutlar çalışmıyorsa \`ayarlar.json\` dosyasındaki bilgilerin doğruluğunu kontrol ediniz.`)
        }
        
        if (msg.channel = praykanali) {
          msg.channel.send(`**Pray** komutu başlatıldı. Bu kanala \`5-7 dakika\` arasında __**owo pray ${prayy}**__ yazılacak.`)
        }
  
        praykanali.send(`owo pray ${prayy}`)
        setInterval(() => {
          praykanali.send(`owo pray ${prayy}`)
           }, Math.floor(Math.random() * (425000 - 305000)) + 305000)
      }
      if (args[1] === `owo`) {
        if (msg.channel != owomesaj) {
          msg.channel.send(`${owomesaj} kanalına \`${owosuresi} saniye\`'de bir __**owo**__ yazılacak.  \n\n**NOT:** Komutlar çalışmıyorsa \`ayarlar.json\` dosyasındaki bilgilerin doğruluğunu kontrol ediniz.`)
        }
  
        if (msg.channel = owomesaj) {
          msg.channel.send(`**OwO** komutu başlatıldı. Bu kanala \`${owosuresi} saniyede\`'de bir __**OwO**__ yazılacak.`)
        }
  
          owomesaj.send('OwO')
          setInterval(() => {
            owomesaj.send('OwO')
             }, owosuresi*1000)
      }

      if (args[1] != `hepsi`) {
        if (args[1] != `hunt`) {
          if (args[1] != `battle`) {
            if (args[1] != `pray`) {
              if (args[1] != `owo`) {
                msg.channel.send(`Lütfen \`hepsi\` , \`hunt\` , \`battle\` , \`pray\` , \`owo\` seçeneklerinden birini yazınız.`)
              }
            }
          }
        }
      }
    }

    if (command === `yardım`) {
      if (!args[1]) {
        msg.channel.send(`\`\`\`__Yardım Kategorileri__\`\`\`\n>>> \`${prefix}yardım başlat:\`  Başlat kategorisindeki komutlar hakkında bilgiler verir.\n\`${prefix}yardım hayvanlar:\`  Hayvanlar kategorisi hakkında bilgiler verir.\n\`${prefix}yardım günlük:\`  Günlük kategorisi hakkında bilgiler verir.\n\`${prefix}yardım para:\`  Para kategorisi hakkında bilgiler verir.\n\`${prefix}yardım diğer:\`  Diğer kategorisi hakkında bilgiler verir.`)
      }
      if (args[1] === `başlat`) {
        msg.channel.send(`\`\`\`__Başlat Kategorisi__\`\`\`\n>>> \`${prefix}başlat hepsi:\`  Belirlenen kanallara belli aralıklarla __**owo hunt**__ , __**owo battle**__ , __**owo pray**__ yazar.\n\`${prefix}başlat hunt:\`  ${hunt} kanalına belli aralıklarla __**owo hunt**__ yazar.\n\`${prefix}başlat battle:\`  ${battle} kanalına belli aralıklarla __**owo battle**__ yazar.\n\`${prefix}başlat pray:\`  ${praykanali} kanalına belli aralıklarla __**owo pray ${prayy}**__ yazar.\n\n\`${prefix}durdur:\`  Botu yeniden başlatır bu sayede tüm işlemler durur.\n\`${prefix}doğrula:\`  ${owobot} bota dm'den girdiğiniz kodu gönderir.`)
      }
      if (args[1] === `hayvanlar`) {
        msg.channel.send(`\`\`\`__Hayvanlar Kategorisi__\`\`\`\n>>> \`\`${prefix}team\`  Takımınıza hayvan eklersiniz.\n${prefix}lootbox:\`  Bir adet **lootbox** açar.\n\`${prefix}lootbox all:\`  Bütün **lootboxları** açar.\n\`${prefix}weaponcrate:\`  Bir adet **weaponcrate** açar.\n\`${prefix}weaponcrate all:\`  Bütün **weaponcrateleri** açar.\n\n\`${prefix}zoo:\`  Avladığınız bütün hayvanları gösterir.\n\`${prefix}sell:\`  Hayvanlarınızın hepsini veya belirli bir enderliktekilerini satabilirsiniz.\n\`${prefix}sacrifice:\`  Hayvanlarınızın hepsini veya belirli bir enderliktekilerini animal essenceye dönüştürebilirsiniz.\n\`${prefix}inventory:\`  Envanterinizi gösterir.\n\`${prefix}use:\`  Gemlerinizi kullanabilirsiniz.`)
      }
      if (args[1] === `günlük`) {
        msg.channel.send(`\`\`\`__Günlük Kategorisi__\`\`\`\n>>> \`${prefix}daily:\`  Günlük ödülünüzü alır.\n\`${prefix}checklist:\`  Günlük görevlerinizi gösterir.\n\`${prefix}quest:\`  Görevlerinizi gösterir.\n\`${prefix}cookie:\`  ID'si girilen kişiye cookie atar.`)
      }
      if (args[1] === `para`) {
        msg.channel.send(`\`\`\`__Para Kategorisi__\`\`\`\n>>> \`${prefix}sell:\`  Hayvanlarınızın hepsini veya belirli bir enderliktekilerini satabilirsiniz.\n\`${prefix}cash:\`  Paranızı gösterir.\n\`${prefix}send:\`  ID'si girilen kişiye istediğiniz miktarda para atar.\n\`${prefix}flip:\`  Flip atarsınız.\n\`${prefix}slot:\`  Slot oynarsınız.`)
      }
      if (args[1] === `diğer`) {
        msg.channel.send(`\`\`\`__Diğer Kategorisi__\`\`\`\n>>> \`${prefix}huntbot:\`  Huntbot komutunu tüm özellikleriyle beraber kullanabilirsiniz.\n\`${prefix}huntbot upgrade efficiency:\`  Huntbotunuzun efficiency özelliğini geliştirebilirsiniz.\n\`${prefix}huntbot upgrade duration:\`  Huntbotunuzun duraiton özelliğini geliştirebilirsiniz.\n\`${prefix}huntbot upgrade cost:\`  Huntbotunuzun cost özelliğini geliştirebilirsiniz.\n\`${prefix}huntbot upgrade gain:\`  Hunbotunuzun gain özelliğini geliştirebilirsiniz.\n\`${prefix}huntbot upgrade experience:\`  Huntbotunuzun experience özelliğini geliştirebilirsiniz.\n\`${prefix}huntbot upgrade radar:\`  Huntbotunuzun radar özelliğini geliştirebilirsiniz.`)
      }
      if (args[1]) {
        if (args[1] != `başlat`) {
          if (args[1] != `hayvanlar`) {
            if (args[1] != `günlük`) {
              if (args[1] != `para`) {
                if (args[1] != `diğer`) {
                  msg.channel.send(`\`\`\`__Yardım Kategorileri__\`\`\`\n\`>>> ${prefix}yardım başlat:\`  Başlat kategorisindeki komutlar hakkında bilgiler verir.\n\`${prefix}yardım hayvanlar:\`  Hayvanlar kategorisi hakkında bilgiler verir.\n\`${prefix}yardım günlük:\`  Günlük kategorisi hakkında bilgiler verir.\n\`${prefix}yardım para:\`  Para kategorisi hakkında bilgiler verir.\n\`${prefix}yardım diğer:\`  Diğer kategorisi hakkında bilgiler verir.`)
                }
              }
            }
          }
        }
      }
    }

    if (command === `doğrula`) {
      if (!args[1]) {
        msg.channel.send(`Lütfen <@${owobotid}> botuna özelden göndereceğiniz \`kelimeyi\` yazınız. \n\n**NOT:** Doğrulama yaparken doğrulama kodunu doğru girdiğinizden __**emin olun**__.`)
      }

      if (args[1]) {
        owobot.send(`${args[1]}`)
        msg.channel.send(`Mesaj başarıyla gönderildi.`)
      }
    }

    if (command === `lootbox`) {
      if (!args[1]) {
        msg.channel.send(`owo lootbox`)
      }
      if (args[1] === `all`) {
        msg.channel.send(`owo lootbox all`)
      }
    }

    if (command === `weaponcrate`) {
      if (!args[1]) {
        msg.channel.send(`owo weaponcrate`)
      }
      if (args[1] === `all`) {
        msg.channel.send(`owo weaponcrate all`)
      }
    }

    if (command === `lb`) {
      if (!args[1]) {
        msg.channel.send(`owo lootbox`)
      }
      if (args[1] === `all`) {
        msg.channel.send(`owo lootbox all`)
      }
    }

    if (command === `wc`) {
      if (!args[1]) {
        msg.channel.send(`owo weaponcrate`)
      } 
      if (args[1] === `all`) {
        msg.channel.send(`owo weaponcrate all`)
      }
    }

    if (command === `cookie`) {
      msg.channel.send(`owo cookie ${cookie}`)
    }

    if (command === `slot`) {
      if (isNaN(args[1])) {
        msg.channel.send(`Lütfen slot oynayacağınız miktarı giriniz.`)
      }
      if (!isNaN(args[1])) {
        msg.channel.send(`owo slot ${args[1]}`)
      }
    }

    if (command === `flip`) {
      if (isNaN(args[1])) {
        msg.channel.send(`Lütfen flip atacağınız miktarı giriniz.`)
      }
      if (!isNaN(args[1])) {
        msg.channel.send(`owo flip ${args[1]}`)
      }
    }

    if (command === `quest`) {
      msg.channel.send(`owo quest`)
    }

    if (command === `checklist`) {
      msg.channel.send(`owo checklist`)
    }

    if (command === `cl`) {
      msg.channel.send(`owo checklist`)
    }

    if (command === `cash`) {
        msg.channel.send(`owo cash`)
    }

    if (command === `money`) {
      msg.channel.send(`owo cash`)
  }

    if (command === `cowoncy`) {
      msg.channel.send(`owo cowoncy`)
    }

    if (command === `inv`) {
      msg.channel.send(`owo inventory`)
    }

    if (command === `inventory`) {
      msg.channel.send(`owo inventory`)
    }

    if (command === `daily`) {
      msg.channel.send(`owo daily`)
    }

    if (command === `zoo`) {
      msg.channel.send(`owo zoo`)
    }

    if (command === `durdur`) {
      msg.channel.send(`Tüm özellikler durduruluyor, bot yeniden başlatılıyor...`).then((sentMessage) => 
      setTimeout(() => {
        sentMessage.edit(`Bütün işlemler durduruldu, bot yeniden başlatıldı. \n\n**NOT:** Bot yeniden başlatıldığı için \`15-20 saniye\` beklemenizi __**öneririz**__. Bot yeniden başlatıldığı için botta çok fazla ping olacaktır.`)
        console.log(`\n`)
        console.log(`\x1b[35m`,`     Bot yeniden başlatılıyor... Lütfen yeniden komut kullanmadan önce 15-20 saniye bekleyiniz.`,`\x1b[0m`)
      }, 2000)
      );
      setTimeout(() => {
        process.exit();
         }, 3000)
    }

    if (command === `kapat`) {
      msg.channel.send(`Tüm özellikler kapatılıyor, bot yeniden başlatılıyor...`).then((sentMessage) => 
      setTimeout(() => {
        sentMessage.edit(`Bütün işlemler kapatıldı, bot yeniden başlatıldı. \n\n**NOT:** Bot yeniden başlatıldığı için \`15-20 saniye\` beklemenizi __**şiddetle öneririz**__. Bot yeniden başlatıldığı için botta çok fazla ping olacaktır.`)
        console.log(`\n`)
        console.log(`     Bot yeniden başlatılıyor... Lütfen yeniden komut kullanmadan 15-20 saniye bekleyiniz.`)
      }, 2000)
      );
      setTimeout(() => {
        process.exit();
         }, 3000)
    }

    if (command === `send`) { 
      if (isNaN(args[1])) {
        msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
      }

      if (!isNaN(args[1])) {
        msg.channel.send(`owo send ${send} ${args[1]}`)
      }
    }

    if (command === `huntbot`) {

      if (!args[1]) {
        msg.channel.send(`owo huntbot`)
      }

      if (isNaN(args[1])) {
        if (args[1]) {
          if (args[1] != `upgrade`) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
        }
      } 

      if (!isNaN(args[1])) {
        if (!args[2]) {
          msg.channel.send(`owo huntbot ${args[1]}`)
        }
        if (args[2]) {
          msg.channel.send(`owo huntbot ${args[1]} ${args[2]}`)
        }
      }

      if (args[1] === `upgrade`) {
        if (args[2] === `efficiency`) {
          if (!args[3]) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
          if (isNaN(args[3])) {
            if (args[3]) {
              msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
            }
          }
          if (!isNaN(args[3])) {
            msg.channel.send(`owo upgrade efficiency ${args[3]}`)
          }
        }
        if (args[2] === `duration`) {
          if (!args[3]) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
          if (isNaN(args[3])) {
            if (args[3]) {
              msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
            }
          }
          if (!isNaN(args[3])) {
            msg.channel.send(`owo upgrade duration ${args[3]}`)
          }
        }
        if (args[2] === `cost`) {
          if (!args[3]) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
          if (isNaN(args[3])) {
            if (args[3]) {
              msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
            }
          }
          if (!isNaN(args[3])) {
            msg.channel.send(`owo upgrade cost ${args[3]}`)
          }
        }
        if (args[2] === `gain`) {
          if (!args[3]) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
          if (isNaN(args[3])) {
            if (args[3]) {
              msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
            }
          }
          if (!isNaN(args[3])) {
            msg.channel.send(`owo upgrade gain ${args[3]}`)
          }
        }
        if (args[2] === `experience`) {
          if (!args[3]) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
          if (isNaN(args[3])) {
            if (args[3]) {
              msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
            }
          }
          if (!isNaN(args[3])) {
            msg.channel.send(`owo upgrade experience ${args[3]}`)
          }
        }
        if (args[2] === `radar`) {
          if (!args[3]) {
            msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
          }
          if (isNaN(args[3])) {
            if (args[3]) {
              msg.channel.send(`Lütfen geçerli bir \`rakam\` giriniz.`)
            }
          }
          if (!isNaN(args[3])) {
            msg.channel.send(`owo upgrade radar ${args[3]}`)
          }
        }
      }

      if (args[2] != `efficiency`) {
        if (args[2] != `duration`) {
          if (args[2] != `cost`) {
            if (args[2] != `gain`) {
              if (args[2] != `experience`) {
                if (args[2] != `radar`) {
                  if (args[1]) {
                    if (args[1] === `upgrade`) {
                      msg.channel.send(`Lütfen \`efficiency\` , \`duration\` , \`cost\` , \`gain\` , \`experience\` , \`radar\` seçeneklerinden birini yazınız.`)
                    }
                  }
                }
              }
            }
          }
        }
      }

    }


    if (command === `sc`) {
      if (args[1] === `all`) {
        msg.channel.send(`owo sacrifice all`)
      }

      if (args[1] === `common`) {
        msg.channel.send(`owo sacrifice common`)
      }

      if (args[1] === `c`) {
        msg.channel.send(`owo sacrifice common`)
      }

      if (args[1] === `uncommon`) {
        msg.channel.send(`owo sacrifice uncommon`)
      }

      if (args[1] === `u`) {
        msg.channel.send(`owo sacrifice uncommon`)
      }

      if (args[1] === `rare`) {
        msg.channel.send(`owo sacrifice rare`)
      }

      if (args[1] === `r`) {
        msg.channel.send(`owo sacrifice rare`)
      }

      if (args[1] === `epic`) {
        msg.channel.send(`owo sacrifice epic`)
      }

      if (args[1] === `e`) {
        msg.channel.send(`owo sacrifice epic`)
      }
      
      if (args[1] === `mythic`) {
        msg.channel.send(`owo sacrifice mythic`)
      }

      if (args[1] === `m`) {
        msg.channel.send(`owo sacrifice mythic`)
      }

      if (args[1] === `patreon`) {
        msg.channel.send(`owo sacrifice patreon`)
      }

      if (args[1] === `p`) {
        msg.channel.send(`owo sacrifice patreon`)
      }

      if (args[1] === `cpatreon`) {
        msg.channel.send(`owo sacrifice cpatreon`)
      }

      if (args[1] === `cp`) {
        msg.channel.send(`owo sacrifice cpatreon`)
      }

      if (args[1] === `legendary`) {
        msg.channel.send(`owo sacrifice legendary`)
      }

      if (args[1] === `l`) {
        msg.channel.send(`owo sacrifice legendary`)
      }

      if (args[1] === `gem`) {
        msg.channel.send(`owo sacrifice gem`)
      }

      if (args[1] === `g`) {
        msg.channel.send(`owo sacrifice gem`)
      }

      if (args[1] === `bot`) {
        msg.channel.send(`owo sacrifice bot`)
      }

      if (args[1] === `b`) {
        msg.channel.send(`owo sacrifice bot`)
      }

      if (args[1] === `distorted`) {
        msg.channel.send(`owo sacrifice distorted`)
      }

      if (args[1] === `d`) {
        msg.channel.send(`owo sacrifice distorted`)
      }

      if (args[1] === `fabled`) {
        msg.channel.send(`owo sacrifice fabled`)
      }

      if (args[1] === `f`) {
        msg.channel.send(`owo sacrifice fabled`)
      }

      if (args[1] === `special`) {
        msg.channel.send(`owo sacrifice special`)
      }

      if (args[1] === `s`) {
        msg.channel.send(`owo sacrifice special`)
      }

      if (args[1] === `hidden`) {
        msg.channel.send(`owo sacrifice hidden`)
      }

      if (args[1] === `h`) {
        msg.channel.send(`owo sacrifice hidden`)
      }

      if (args[1] != `common`) {
        if (args[1] != `c`) {
          if (args[1] != `uncommon`) {
            if (args[1] != `u`) {
              if (args[1] != `rare`) {
                if (args[1] != `r`) {
                  if (args[1] != `epic`) {
                    if (args[1] != `e`) {
                      if (args[1] != `mythic`) {
                        if (args[1] != `m`) {
                          if (args[1] != `patreon`) {
                            if (args[1] != `p`) {
                              if (args[1] != `cpatreon`) {
                                if (args[1] != `cp`) {
                                  if (args[1] != `legendary`) {
                                    if (args[1] != `l`) {
                                      if (args[1] != `gem`) {
                                        if (args[1] != `g`) {
                                          if (args[1] != `bot`) {
                                            if (args[1] != `b`) {
                                              if (args[1] != `distorted`) {
                                                if (args[1] != `d`) {
                                                  if (args[1] != `fabled`) {
                                                    if (args[1] != `f`) {
                                                      if (args[1] != `special`) {
                                                        if (args[1] != `s`) {
                                                          if (args[1] != `hidden`) {
                                                            if (args[1] != `h`) {
                                                              if (args[1] != `all`) {
                                                                msg.channel.send(`Lütfen \`all\` , \`common\` , \`uncommon\` , \`rare\` , \`epic\` , \`mythic\` , \`patreon\` , \`cpatreon\` , \`legendary\` , \`gem\` , \`bot\` , \`distorted\` , \`fabled\` , \`special\` , \`hidden\` seçeneklerinden birini yazınız.`)
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  if (command === `sacrifice`) {
    if (args[1] === `all`) {
      msg.channel.send(`owo sacrifice all`)
    }

    if (args[1] === `common`) {
      msg.channel.send(`owo sacrifice common`)
    }

    if (args[1] === `c`) {
      msg.channel.send(`owo sacrifice common`)
    }

    if (args[1] === `uncommon`) {
      msg.channel.send(`owo sacrifice uncommon`)
    }

    if (args[1] === `u`) {
      msg.channel.send(`owo sacrifice uncommon`)
    }

    if (args[1] === `rare`) {
      msg.channel.send(`owo sacrifice rare`)
    }

    if (args[1] === `r`) {
      msg.channel.send(`owo sacrifice rare`)
    }

    if (args[1] === `epic`) {
      msg.channel.send(`owo sacrifice epic`)
    }

    if (args[1] === `e`) {
      msg.channel.send(`owo sacrifice epic`)
    }
    
    if (args[1] === `mythic`) {
      msg.channel.send(`owo sacrifice mythic`)
    }

    if (args[1] === `m`) {
      msg.channel.send(`owo sacrifice mythic`)
    }

    if (args[1] === `patreon`) {
      msg.channel.send(`owo sacrifice patreon`)
    }

    if (args[1] === `p`) {
      msg.channel.send(`owo sacrifice patreon`)
    }

    if (args[1] === `cpatreon`) {
      msg.channel.send(`owo sacrifice cpatreon`)
    }

    if (args[1] === `cp`) {
      msg.channel.send(`owo sacrifice cpatreon`)
    }

    if (args[1] === `legendary`) {
      msg.channel.send(`owo sacrifice legendary`)
    }

    if (args[1] === `l`) {
      msg.channel.send(`owo sacrifice legendary`)
    }

    if (args[1] === `gem`) {
      msg.channel.send(`owo sacrifice gem`)
    }

    if (args[1] === `g`) {
      msg.channel.send(`owo sacrifice gem`)
    }

    if (args[1] === `bot`) {
      msg.channel.send(`owo sacrifice bot`)
    }

    if (args[1] === `b`) {
      msg.channel.send(`owo sacrifice bot`)
    }

    if (args[1] === `distorted`) {
      msg.channel.send(`owo sacrifice distorted`)
    }

    if (args[1] === `d`) {
      msg.channel.send(`owo sacrifice distorted`)
    }

    if (args[1] === `fabled`) {
      msg.channel.send(`owo sacrifice fabled`)
    }

    if (args[1] === `f`) {
      msg.channel.send(`owo sacrifice fabled`)
    }

    if (args[1] === `special`) {
      msg.channel.send(`owo sacrifice special`)
    }

    if (args[1] === `s`) {
      msg.channel.send(`owo sacrifice special`)
    }

    if (args[1] === `hidden`) {
      msg.channel.send(`owo sacrifice hidden`)
    }

    if (args[1] === `h`) {
      msg.channel.send(`owo sacrifice hidden`)
    }

    if (args[1] != `common`) {
      if (args[1] != `c`) {
        if (args[1] != `uncommon`) {
          if (args[1] != `u`) {
            if (args[1] != `rare`) {
              if (args[1] != `r`) {
                if (args[1] != `epic`) {
                  if (args[1] != `e`) {
                    if (args[1] != `mythic`) {
                      if (args[1] != `m`) {
                        if (args[1] != `patreon`) {
                          if (args[1] != `p`) {
                            if (args[1] != `cpatreon`) {
                              if (args[1] != `cp`) {
                                if (args[1] != `legendary`) {
                                  if (args[1] != `l`) {
                                    if (args[1] != `gem`) {
                                      if (args[1] != `g`) {
                                        if (args[1] != `bot`) {
                                          if (args[1] != `b`) {
                                            if (args[1] != `distorted`) {
                                              if (args[1] != `d`) {
                                                if (args[1] != `fabled`) {
                                                  if (args[1] != `f`) {
                                                    if (args[1] != `special`) {
                                                      if (args[1] != `s`) {
                                                        if (args[1] != `hidden`) {
                                                          if (args[1] != `h`) {
                                                            if (args[1] != `all`) {
                                                              msg.channel.send(`Lütfen \`all\` , \`common\` , \`uncommon\` , \`rare\` , \`epic\` , \`mythic\` , \`patreon\` , \`cpatreon\` , \`legendary\` , \`gem\` , \`bot\` , \`distorted\` , \`fabled\` , \`special\` , \`hidden\` seçeneklerinden birini yazınız.`)
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }


    if (command === `sell`) {
        if (args[1] === `all`) {
          msg.channel.send(`owo sell all`)
        }

        if (args[1] === `common`) {
          msg.channel.send(`owo sell common`)
        }

        if (args[1] === `c`) {
          msg.channel.send(`owo sell common`)
        }

        if (args[1] === `uncommon`) {
          msg.channel.send(`owo sell uncommon`)
        }

        if (args[1] === `u`) {
          msg.channel.send(`owo sell uncommon`)
        }

        if (args[1] === `rare`) {
          msg.channel.send(`owo sell rare`)
        }

        if (args[1] === `r`) {
          msg.channel.send(`owo sell rare`)
        }

        if (args[1] === `epic`) {
          msg.channel.send(`owo sell epic`)
        }

        if (args[1] === `e`) {
          msg.channel.send(`owo sell epic`)
        }
        
        if (args[1] === `mythic`) {
          msg.channel.send(`owo sell mythic`)
        }

        if (args[1] === `m`) {
          msg.channel.send(`owo sell mythic`)
        }

        if (args[1] === `patreon`) {
          msg.channel.send(`owo sell patreon`)
        }

        if (args[1] === `p`) {
          msg.channel.send(`owo sell patreon`)
        }

        if (args[1] === `cpatreon`) {
          msg.channel.send(`owo sell cpatreon`)
        }

        if (args[1] === `cp`) {
          msg.channel.send(`owo sell cpatreon`)
        }

        if (args[1] === `legendary`) {
          msg.channel.send(`owo sell legendary`)
        }

        if (args[1] === `l`) {
          msg.channel.send(`owo sell legendary`)
        }

        if (args[1] === `gem`) {
          msg.channel.send(`owo sell gem`)
        }

        if (args[1] === `g`) {
          msg.channel.send(`owo sell gem`)
        }

        if (args[1] === `bot`) {
          msg.channel.send(`owo sell bot`)
        }

        if (args[1] === `b`) {
          msg.channel.send(`owo sell bot`)
        }

        if (args[1] === `distorted`) {
          msg.channel.send(`owo sell distorted`)
        }

        if (args[1] === `d`) {
          msg.channel.send(`owo sell distorted`)
        }

        if (args[1] === `fabled`) {
          msg.channel.send(`owo sell fabled`)
        }

        if (args[1] === `f`) {
          msg.channel.send(`owo sell fabled`)
        }

        if (args[1] === `special`) {
          msg.channel.send(`owo sell special`)
        }

        if (args[1] === `s`) {
          msg.channel.send(`owo sell special`)
        }

        if (args[1] === `hidden`) {
          msg.channel.send(`owo sell hidden`)
        }

        if (args[1] === `h`) {
          msg.channel.send(`owo sell hidden`)
        }

        if (args[1] === `commonweapons`) {
          msg.channel.send(`owo sell commonweapons`)
        }

        if (args[1] === `cw`) {
          msg.channel.send(`owo sell commonweapons`)
        }

        if (args[1] === `uncommonweapons`) {
          msg.channel.send(`owo sell uncommonweapons`)
        }

        if (args[1] === `uw`) {
          msg.channel.send(`owo sell uncommonweapons`)
        }

        if (args[1] === `rareweapons`) {
          msg.channel.send(`owo sell rareweapons`)
        }

        if (args[1] === `rw`) {
          msg.channel.send(`owo sell rareweapons`)
        }

        if (args[1] === `epicweapons`) {
          msg.channel.send(`owo sell epicweapons`)
        }

        if (args[1] === `ew`) {
          msg.channel.send(`owo sell epicweapons`)
        }

        if (args[1] === `mythicweapons`) {
          msg.channel.send(`owo sell mythicweapons`)
        }

        if (args[1] === `mw`) {
          msg.channel.send(`owo sell mythicweapons`)
        }

        if (args[1] === `legendaryweapons`) {
          msg.channel.send(`owo sell legendaryweapons`)
        }

        if (args[1] === `lw`) {
          msg.channel.send(`owo sell legendaryweapons`)
        }

        if (args[1] === `fabledweapons`) {
          msg.channel.send(`owo sell fabledweapons`)
        }

        if (args[1] === `fw`) {
          msg.channel.send(`owo sell fabledweapons`)
        }

        if (args[1] != `common`) {
          if (args[1] != `c`) {
            if (args[1] != `uncommon`) {
              if (args[1] != `u`) {
                if (args[1] != `rare`) {
                  if (args[1] != `r`) {
                    if (args[1] != `epic`) {
                      if (args[1] != `e`) {
                        if (args[1] != `mythic`) {
                          if (args[1] != `m`) {
                            if (args[1] != `patreon`) {
                              if (args[1] != `p`) {
                                if (args[1] != `cpatreon`) {
                                  if (args[1] != `cp`) {
                                    if (args[1] != `legendary`) {
                                      if (args[1] != `l`) {
                                        if (args[1] != `gem`) {
                                          if (args[1] != `g`) {
                                            if (args[1] != `bot`) {
                                              if (args[1] != `b`) {
                                                if (args[1] != `distorted`) {
                                                  if (args[1] != `d`) {
                                                    if (args[1] != `fabled`) {
                                                      if (args[1] != `f`) {
                                                        if (args[1] != `special`) {
                                                          if (args[1] != `s`) {
                                                            if (args[1] != `hidden`) {
                                                              if (args[1] != `h`) {
                                                                if (args[1] != `commonweapons`) {
                                                                  if (args[1] != `cw`) {
                                                                    if (args[1] != `uncommonweapons`) {
                                                                      if (args[1] != `uw`) {
                                                                        if (args[1] != `rareweapons`) {
                                                                          if (args[1] != `rw`) {
                                                                            if (args[1] != `epicweapons`) {
                                                                              if (args[1] != `ew`) {
                                                                                if (args[1] != `mythicweapons`) {
                                                                                  if (args[1] != `mw`) {
                                                                                    if (args[1] != `legendaryweapons`) {
                                                                                      if (args[1] != `lw`) {
                                                                                        if (args[1] != `fabledweapons`) {
                                                                                          if (args[1] != `fw`) {
                                                                                            if (args[1] != `all`) {
                                                                                              msg.channel.send(`Lütfen \`all\` , \`common\` , \`uncommon\` , \`rare\` , \`epic\` , \`mythic\` , \`patreon\` , \`cpatreon\` , \`legendary\` , \`gem\` , \`bot\` , \`distorted\` , \`fabled\` , \`special\` , \`hidden\` , \`commonweapons\` , \`uncommonweapons\` , \`rareweapons\` , \`epicweapons\` , \`mythicweapons\` , \`legendaryweapons\` , \`fabledweapons\` seçeneklerinden birini yazınız.`)
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
    }

    if (command === `use`) {
      if (args[1] === '51') {
        msg.channel.send('owo use 51')
      }
  
      if (args[1] === '52') {
        msg.channel.send('owo use 52')
      }
  
      if (args[1] === '53') {
        msg.channel.send('owo use 53')
      }
  
      if (args[1] === '54') {
        msg.channel.send('owo use 54')
      }
  
      if (args[1] === '55') {
        msg.channel.send('owo use 55')
      }
  
      if (args[1] === '56') {
        msg.channel.send('owo use 56')
      }
  
      if (args[1] === '57') {
        msg.channel.send('owo use 57')
      }
  
      if (args[1] === '58') {
        msg.channel.send('owo use 58')
      }
  
      if (args[1] === '59') {
        msg.channel.send('owo use 59')
      }
  
      if (args[1] === '60') {
        msg.channel.send('owo use 60')
      }
  
      if (args[1] === '61') {
        msg.channel.send('owo use 61')
      }
  
      if (args[1] === '62') {
        msg.channel.send('owo use 62')
      }
  
      if (args[1] === '63') {
        msg.channel.send('owo use 63')
      }
  
      if (args[1] === '64') {
        msg.channel.send('owo use 64')
      }
  
      if (args[1] === '65') {
        msg.channel.send('owo use 65')
      }
  
      if (args[1] === '66') {
        msg.channel.send('owo use 66')
      }
  
      if (args[1] === '67') {
        msg.channel.send('owo use 67')
      }
  
      if (args[1] === '68') {
        msg.channel.send('owo use 68')
      }
  
      if (args[1] === '69') {
        msg.channel.send('owo use 69')
      }
  
      if (args[1] === '70') {
        msg.channel.send('owo use 70')
      }
  
      if (args[1] === '71') {
        msg.channel.send('owo use 71')
      }
  
      if (args[1] === '72') {
        msg.channel.send('owo use 72')
      }
  
      if (args[1] === '73') {
        msg.channel.send('owo use 73')
      }
  
      if (args[1] === '74') {
        msg.channel.send('owo use 74')
      }
  
      if (args[1] === '75') {
        msg.channel.send('owo use 75')
      }
  
      if (args[1] === '76') {
        msg.channel.send('owo use 76')
      }
  
      if (args[1] === '77') {
        msg.channel.send('owo use 77')
      }
  
      if (args[1] === '78') {
        msg.channel.send('owo use 78')
      }
  
      if (args[1] === '79') {
        msg.channel.send('owo use 79')
      }

      if (args[1] != `51`) {
        if (args[1] != `52`) {
          if (args[1] != `53`) {
            if (args[1] != `54`) {
              if (args[1] != `55`) {
                if (args[1] != `56`) {
                  if (args[1] != `57`) {
                    if (args[1] != `58`) {
                      if (args[1] != `59`) {
                        if (args[1] != `60`) {
                          if (args[1] != `61`) {
                            if (args[1] != `62`) {
                              if (args[1] != `63`) {
                                if (args[1] != `64`) {
                                  if (args[1] != `65`) {
                                    if (args[1] != `66`) {
                                      if (args[1] != `67`) {
                                        if (args[1] != `68`) {
                                          if (args[1] != `69`) {
                                            if (args[1] != `70`) {
                                              if (args[1] != `71`) {
                                                if (args[1] != `72`) {
                                                  if (args[1] != `73`) {
                                                    if (args[1] != `74`) {
                                                      if (args[1] != `75`) {
                                                        if (args[1] != `76`) {
                                                          if (args[1] != `77`) {
                                                            if (args[1] != `78`) {
                                                              if (args[1] != `79`) {
                                                                  msg.channel.send(`Lütfen \`51-79 (51 ve 79 dahil)\` sayıları arasından bir sayı yazınız.`)
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
}
})

client.on('ready', () => {
client.channels.cache.get(praykanal).startTyping()
console.log(`\n`)
console.log(`\x1b[33m`,`     ${client.user.tag} isimli discord hesabı aktif edildi.`,`\x1b[0m`);
});