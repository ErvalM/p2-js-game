        /* End Game Score */
        window.onload = function(){
            const endScore = document.getElementById('endScore')
            endScore.style.fontSize = '50px'
            endScore.textContent = localStorage.getItem('score')
        }