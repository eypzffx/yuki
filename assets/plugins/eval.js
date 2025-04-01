const { command, isPrivate } = require("../../lib/");
const util = require('util');
const { saveMessage, loadMessage, saveChat, getName } = require("../database/StoreDb.js");
const config = require ('../../config')
command({pattern: '> ?(.*)', fromMe: true,dontAddCommandList: true, desc: 'Run js code (evel)', type: 'misc'}, async (message, match, client) => {return});
command({on: 'text', fromMe: true, dontAddCommandList: true,desc: 'Run js code (evel)', type: 'misc'}, async (message, match, client) => {
if (message.message && message.message.startsWith(">")) {
const m = message;
try {
let evaled = await eval(`${message.message.replace(">","")}`) 
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
await message.reply(evaled) 
} catch (err) {
await message.reply(util.format(err))
}}
})

command({on:'text', fromMe: true,dontAddCommandList: true}, async (message, match, client) => {
if (message && message.message && message.message.startsWith("$")) {
var m = message
var conn = message.client
const util = require('util')
const json = (x) => JSON.stringify(x,null,2)
try { let return_val = await eval(`(async () => { ${message.message.replace("$","")} })()`)
if (return_val && typeof return_val !== 'string') return_val = util.inspect(return_val)
if (return_val) await message.send(return_val || "No return value")} catch (e) {
if (e) await message.send(util.format(e))}
}
})
