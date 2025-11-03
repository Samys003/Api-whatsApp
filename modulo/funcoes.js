/*************************************************************************************************************************************** 
 *  Objetivo: arquivo de funções para gerenciar a API de estados e cidades

 * Data: 22/09/2025 
 
 * Autor: Samara Santos
 
 * Versão: 1.0
 
***************************************************************************************************************************************/

const dados = require('./contatos.js')


const getAllUsuarios = function () {
  let message = { status: true, status_code: 200, development: 'Samara Santos', dados: dados.contatos['whats-users'] }

  return message

}

const getProfileUser = function (id) {

  let message = { status: true, status_code: 200, development: 'Samara Santos', profile: [] }

  dados.contatos['whats-users'].forEach(item => {
    if (item.id === id) {

      message.profile.push({
        nome: item.nickname,
        numero: item.number,
        foto: item['profile-image'],
        background: item.background,
        criado_em: item['created-since']
      })

    }
  })
  return message
}

const getContactUser = function (number) {

  let message = { status: true, status_code: 200, development: 'Samara Santos' }

  dados.contatos['whats-users'].forEach(item => {
    if (item.number === number) {

      message.number = item.number
      message.contatos = item.contacts.map(user => {
        return {
          nome: user.name,
          numero: user.number,
          imagem: user.image,
          descricao: user.description

        }

      })

    }

  })
  return message
}

const getAllMessages = function (number) {

  let message = { status: true, status_code: 200, development: 'Samara Santos' }

  dados.contatos['whats-users'].forEach(item => {
    if (item.number === number) {



      message.mensagens = item.contacts.map(user => {
        return user.messages


      })

    }
  })
  return message
}

const getUserMessage = function (number) {

  let message = { status: true, status_code: 200, development: 'Samara Santos' }

  dados.contatos['whats-users'].forEach(item => {
    if (item.number === number) {


      message.contato = item.contacts.map(user => {
        return {
          nome: user.name,
          numero: user.number,
          content: user.messages.map(contact => {
            return {
              nome: contact.sender,
              mensagem: contact.content,
              hora: contact.time
            }

          })
        }
      })

    }

  })

  return message
}

const filterKeyword = function (number, contact, keyword) {

  let message = { status: true, status_code: 200, development: 'Samara Santos' }

    dados.contatos['whats-users'].forEach(item => {
    if (item.number === number) {
      item.contacts.find(user => {
        if (user.number === contact) {
          user.messages.find((word) => {
            const result = word.content.toLowerCase().includes(keyword.toLowerCase())

            return result
          })
        }
      })
    }

  })

  return message

}


console.log(filterKeyword('11987876567', '26999999963', 'Great'))

module.exports = {
  getAllUsuarios,
  getProfileUser,
  getContactUser,
  getAllMessages,
  getUserMessage

}