<h1 align="center"> Desafio Objetos e módulos</h1>

<h4>Você deve criar um sistema para calcular o valor total de um pedido, considerando uma porcentagem
de desconto e o frete. O cálculo do valor total do pedido consiste em aplicar o desconto ao valor
básico do pedido, e adicionar o valor do frete. A regra para cálculo do frete é a seguinte: </h4>



<table>
    <tr>
        <td>Valor básico do pedido (sem desconto)</td>
        <td>Frete</td>
    </tr>
    <tr>
        <td>Abaixo de R$ 100.00 </td>
        <td>R$ 20.00</td>
    </tr>
    <tr>
        <td>De R$ 100.00 até R$ 200.00 exclusive</td>
        <td>R$ 12.00</td>
    </tr>
  <tr>
        <td>R$ 200.00 ou mais</td>
        <td>Grátis</td>
    </tr>
</table>

<h4>Exemplo 1:</h4>
<table>
    <tr>
        <td>ENTRADA (dados do pedido: código, valor básico,
porcentagem de desconto)</td>
        <td>SAÍDA</td>
    </tr>
    <tr>
        <td><ul>
              <li>1034</li>
              <li>150.00</li>
              <li>I20.0</li>
              </ul></td>
        <td><ul>
              <li>Pedido código 1034</li>
              <li>Valor total: R$ 132.00</li>
              </ul></td></td>
    </tr>
    </table>
    
  <h4>Exemplo 2:</h4> 
<table>
    <tr>
        <td>ENTRADA (dados do pedido: código, valor básico,
porcentagem de desconto)</td>
        <td>SAÍDA</td>
    </tr>
    <tr>
        <td><ul>
              <li>2282</li>
              <li>800.00</li>
              <li>10.0</li>
              </ul></td>
        <td><ul>
              <li>Pedido código 2282</li>
              <li>Valor Valor total: R$ 720.00</li>
              </ul></td></td>
    </tr>
    </table>
    
  <h4>Exemplo 3:</h4> 
    <table>
    <tr>
        <td>ENTRADA (dados do pedido: código, valor básico,
porcentagem de desconto)</td>
        <td>SAÍDA</td>
    </tr>
    <tr>
        <td><ul>
              <li>1309</li>
              <li>95.90</li>
              <li>0.0</li>
              </ul></td>
        <td><ul>
              <li>Pedido código 1309</li>
              <li>Valor Valor total: R$ 115.90</li>
              </ul></td></td>
    </tr>
         </table>
          <h4>Sua solução deverá seguir as seguintes especificações:</h4> 
           <h4>Um pedido deve ser representado por um objeto conforme projeto abaixo:</h4> 
           <div>
              <img  src = "https://user-images.githubusercontent.com/85500087/231861457-4e761935-3c78-45fd-8a2a-7064f42538f5.png">
         </div>
        <h4>A lógica do cálculo do valor total do pedido deve ser implementada por serviços, cada um com sua
                   responsabilidade, conforme projeto abaixo:</h4> 
                    <div>
              <img  src = "https://user-images.githubusercontent.com/85500087/231864380-39588e9e-ee15-4b51-b4ef-158fc9575f33.png">
         </div>
           <h4>Serviço OrderService: responsável por operações referentes a pedidos.</h4> 
           <h4>Serviço ShippingService: responsável por operações referentes a frete.</h4> 
           <h4>Cada serviço deve ser implementado como um módulo JavaScript.</h4> 

           
    
           
    


