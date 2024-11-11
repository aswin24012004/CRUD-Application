const plus = document.getElementById('plus');
	const container = document.querySelector('.container'); 
	const view = document.getElementById('view');

	viewbox.innerHTML = "";

	plus.onclick = () => {
		container.style.display = 'block';
		view.style.display = 'none';
	};

	function cancel() {
		document.getElementById('head').value = "";
		document.getElementById('para').value = "";
		container.style.display = 'none';
		view.style.display = 'block';
	}

	function add() {
		const name = document.getElementById('head').value.trim();
		const para = document.getElementById('para').value.trim();

		if (!name || !para) {
			alert("Please enter both Name and Paragraph.");
			return;
		}

		const div = document.createElement('div');
		div.innerHTML = addContent(name, para);
		div.className = "divition";

		viewbox.appendChild(div);

		document.getElementById('head').value = "";
		document.getElementById('para').value = "";

		container.style.display = 'none';
		view.style.display = 'block';
	}

	function addContent(name, para) {
		return `<h1>${name}</h1>
				<p>${para}</p>
				<button onclick="update(this)">Update</button>
				<button onclick="deleteItem(this)">Delete</button>`;
	}

	function update(button) {
		const h1 = button.parentElement.querySelector('h1').textContent;
		const p  =  button.parentElement.querySelector('p').textContent;
		const newName = prompt("Enter new name:",h1);
		const newPara = prompt("Enter new paragraph:",p);

		if (newName && newPara) {
			button.parentElement.querySelector('h1').textContent = newName;
			button.parentElement.querySelector('p').textContent = newPara;
		}
	}

	function deleteItem(button) {
		button.parentElement.remove();
	}