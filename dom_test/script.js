const pText = document.querySelector('#container');

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';
pText.appendChild(redP);

const blueH = document.createElement('h3');
blueH.textContent = "I'm a blue h3!";
blueH.style.color = 'blue';
redP.before(blueH);

const bigDiv = document.createElement('div');
bigDiv.classList.add('forDiv');
redP.after(bigDiv);

bigDiv.innerHTML = '<h1>I\'m in a div</h1><p>ME TOO!</p>';
