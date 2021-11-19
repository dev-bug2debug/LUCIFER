let handler = async m => m.reply(`
☕ *Lucifer :* a whatsapp bot\n\n🔗 *URL :* https://github.com/Stolenboydevil/LUCIFER_v2
`.trim()) // repository
handler.help = ['lucifer']
handler.tags = ['info']
handler.command = /^lucifer|repo$/i

module.exports = handler
