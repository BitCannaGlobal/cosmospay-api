import { assets, chains } from 'chain-registry'
import fetch from 'node-fetch'
import fs from 'fs'

var finalData = []

  async function getLcd(chain) {
    let finder = chains.find(
      ({chain_name}) => chain_name === chain
    ) 
    let finalLcd = ''
    
    if (typeof finder !== 'undefined' && typeof finder.apis !== 'undefined') {      
      for (const lcds of finder.apis.rest) {      
        try {
          const response = await fetch(lcds.address + '/node_info')
          if (response.status == 200) {
            finalLcd = lcds.address
            break
          } 
        } catch (err) {
          console.error(err)
        }        
      }      
    }
    return finalLcd
  }
  async function getRpc(chain) {
    let finder = chains.find(
      ({chain_name}) => chain_name === chain
    ) 
    let finalRpc = ''
    
    if (typeof finder !== 'undefined' && typeof finder.apis !== 'undefined') {   
      for (const rpcs of finder.apis.rpc) {      
        try {
          const response = await fetch(rpcs.address)
          if (response.status == 200) {
            finalRpc = rpcs.address
            break
          } 
        } catch (err) {
          console.error(err)
        }        
      }      
    }
    return finalRpc
  }
  
  let getChains = fs.readFileSync('cosmos.config.json');
  let getChainsJson = JSON.parse(getChains);
  
  for (const chain of getChainsJson) {  
    chain.apiURL = await getLcd(chain.name.toLowerCase())
    chain.rpcURL = await getRpc(chain.name.toLowerCase())
  }

  fs.writeFileSync("cosmos.config.json", JSON.stringify(getChainsJson, null, 2))
 
