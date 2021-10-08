const { Telegraf } = require("telegraf");
require("dotenv").config();


const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// шаблон команды
// bot.command("test", (ctx) => {
//    return ctx.replyWithMarkdown(`test`);
//  });

console.log("Ready!")

bot.command("amogus", (ctx) => {
    return ctx.replyWithAudio({ source: "./content/amogus.mp3" });
  });

  bot.command("amogus2", (ctx) => {
    return ctx.replyWithVideo({ source: "./content/ahuenoevideo.mp4" });
  });

  bot.command("amogus3", (ctx) => {
    return ctx.replyWithPhoto({ source: "./content/amongus.jpg" });
  });

  bot.command("amogus4", (ctx) => {
    return ctx.reply(`Амогусы закончились`);
  });




  bot.command("nahui", (ctx) => {
    return ctx.reply(`Кто прочитал тот пойдёт нахуй! Если прочитал то пошёл нахуй!!!`);
  });






bot.start((ctx) =>
  ctx.reply(
    `AMOGUS!!!!!!!!!!!!!!!!!!!!!!!!!!!!.`
  )
);


bot.command("help", (ctx) => {
    return ctx.replyWithMarkdown(`Все команды бота:
  */amogus* : sus?
  */amogus2* : sus?
  */amogus3* : sus?
  */amogus4* : sus?
  */nahui* : послать своего друга нахуй
  */help* : это сообщение которое вы видите сейчас
  */whoami* : информация о тебе в телеги
  *Команд пока мало но будут добавляться в будущем*
  *Дополнительно*
  Исходный код бота: https://github.com/TRB-Exe/dotexe228-tgbot
  Повешен на хостинге hosting`);
  });





bot.command("whoami", (ctx) => {
  const { id, username, first_name, last_name } = ctx.from;
  return ctx.replyWithMarkdown(`Информация о тебе:
*Айди* : ${id}
*Имя пользователя* : ${username}
*Имя* : ${first_name}
*Фамилия* : ${last_name}
*Айди чата* : ${ctx.chat.id}`);
});





bot.launch();
