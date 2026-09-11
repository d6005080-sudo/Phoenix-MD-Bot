const { pnix } = require('../lib')

pnix({
  command: 'setname',
  fromMe: true,
  onlyGroup: true,
  type: 'group',
  desc: 'Change group name'
}, async (m, text) => {
  if (!text) return m.send('Usage: .setname New Name')
  await m.client.groupUpdateSubject(m.jid, text)
  await m.send('✅ Group name changed')
})

pnix({
  command: 'setdesc',
  fromMe: true,
  onlyGroup: true,
  type: 'group',
  desc: 'Change group description'
}, async (m, text) => {
  if (!text) return m.send('Usage: .setdesc New Description')
  await m.client.groupUpdateDescription(m.jid, text)
  await m.send('✅ Group description changed')
})
