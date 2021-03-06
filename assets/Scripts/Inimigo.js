cc.Class({
    extends: cc.Component,

    properties: {
        alvo: cc.Node,
        _movimentacao : cc.Component,
        _controleAnimacao : cc.Component,
        _gameOver : cc.Node,
        distanciaAtaque : cc.Float,
        
       
    },

    onLoad: function () {
        this._movimentacao = this.getComponent("Movimentacao");
        this._controleAnimacao = this.getComponent("ControleDeAnimacao");
        this._gameOver = cc.find("GameOver");
        this.alvo = cc.find("Personagens/Personagem");
    },

    update: function (dt) {
        let direcao = this.alvo.position.sub(this.node.position);
        let distancia = direcao.mag();
        this._controleAnimacao.mudaAnimacao(direcao, "Andar");
        this._movimentacao.setDirecao(direcao);
        this._movimentacao.andarPraFrente();
        
        if(distancia < this.distanciaAtaque){
           this.alvo.getComponent("Jogador").vivo = false;
        }
    },
    
    
    
    
    
    
    
    
});
