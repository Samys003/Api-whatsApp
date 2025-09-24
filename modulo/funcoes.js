/*************************************************************************************************************************************** 
 *  Objetivo: arquivo de funções para gerenciar a API de estados e cidades

 * Data: 22/09/2025 
 
 * Autor: Samara Santos
 
 * Versão: 1.0
 
***************************************************************************************************************************************/

const dados = require('./contatos.js')


const getAllUsuarios =  function(){
    let message = { status: true, status_code: 200, development: 'Samara Santos' , dados: [] }

    dados.contatos['whats-users'].forEach(function(item){
        message.dados.push(item.number)
    })
    
}

console.log(getAllUsuarios())