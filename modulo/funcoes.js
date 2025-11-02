/*************************************************************************************************************************************** 
 *  Objetivo: arquivo de funções para gerenciar a API de estados e cidades

 * Data: 22/09/2025 
 
 * Autor: Samara Santos
 
 * Versão: 1.0
 
***************************************************************************************************************************************/

const dados = require('./contatos.js')


const getAllUsuarios =  function(){
    let message = { status: true, status_code: 200, development: 'Samara Santos' , dados: dados.contatos['whats-users'] }

    return message
    
}

const getProfileUser = function(id){

     let message = { status: true, status_code: 200, development: 'Samara Santos' , profile: [] }

     dados.contatos['whats-users'].forEach(item => {
        if(item === id)

          message.profile.push({
            nome: item.nickname,
            numero: item.number,
            foto: item['profile-image'],
            background: item.background,
            criado_em: item['created-since']
          })
        
          return message
    })
    
}

console.log(getProfileUser(1))