new Vue({
    el: '#app',
    data: {
        gameIsRunning: false,
        playerHealth: 100,
        monsterHealth: 100,
        infos: [],

    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.infos = [];
            
        },
        attack: function() {
            this.playerAttack(3, 10);
            this.monsterAttack(5, 12);
        },
        specialAttack: function() {
            this.playerAttack(5, 15);
            this.monsterAttack(10, 20);         
        },
        playerAttack: function(min, max) {
            var damage = this.calculateDamage(min, max);
            this.monsterHealth -= damage;
            this.addInfo({
                isPlayer: true,
                text: 'PLAYER HITS MONSTER FOR ' + damage
            });
        },
        monsterAttack: function(min, max) {
            damage = this.calculateDamage(min, max);
            this.playerHealth -= damage;
            this.addInfo({
                isPlayer: false,
                text: 'MONSTER HITS PLAYER FOR ' + damage
            });
        },
        heal: function() {
            this.playerHealth += 10;
            this.addInfo({
                isPlayer: true,
                text: 'PLAYER HEALS FOR ' + 10
            });
            this.monsterAttack(3, 10);   

        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        addInfo: function(info) {
            this.infos.unshift(info);
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }

    },
    watch: {
        playerHealth: function(value) {
            this.playerHealth = Math.min(this.playerHealth, 100);

            if (this.playerHealth <= 0) {
                if (confirm('You lose! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }

            
            
        },
        monsterHealth: function(value) {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }
                
            
        }
    }
})