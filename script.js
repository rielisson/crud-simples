class SacolaDeCompra{
    constructor(){
        this.itens = [];
    }
   
    
    adicionarItem(item){
        this.itens.push(item);
        alert(`Item "${item}" adicionado á lista.`);
    }
    listarItens(){
        alert("Items na lista:");
        this.itens.forEach((item,index) => {
            alert(`${index + 1}. ${item}`);
        })
    }
    pesquisarItem(item){
        let index = this.itens.indexOf(item);
        if(index !== -1){
            alert(`Item "${item}" encontrado na posição ${index + 1} da lista.`);
        }else{
            alert(`o Item "${item}" não foi encontrado na lista.`);
        }
    }
    removerItem(item){
        let index = this.itens.indexOf(item);
        if(index !== -1){
            this.itens.splice(index,1);
            alert(`Item "${item}" removido da lista.`);
        }else {
            alert(`Item "${item}" não encontrado na listar`)
        }   
    }
}
   
const lista = new SacolaDeCompra();

while (true){
    let operacao = prompt(
        "Escolha uma operação:\n1. adicionar item\n2. Listar itens\n3. Pesquisar item\n4. Remover item\n5. Encerrar programa."
    );
    switch (operacao) {
        case "1":
            const novoItem = prompt ("digite o novo item:");
            lista.adicionarItem(novoItem);
            break;
        case "2":
            lista.listarItens();
            break;
        case "3":
            const searchItem = prompt("digite o item a ser pesquisador:");
            lista.pesquisarItem(searchItem);
            break;
        case "4":
            const itemRemover = prompt("digite o item a ser removido:");
            lista.removerItem(itemRemover);
            break;
        case "5":
            alert("Programa encerrado.");
            break;
        default:
            alert("Operaçao invalida. tente novamente.");        
    }
}