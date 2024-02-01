document.addEventListener("DOMContentLoaded", () => {
            let characterId = 1;
            document.querySelector(".btn.btn-primary").addEventListener("click", event => {
                fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
                    .then(response => response.json())
                    .then(data => {
                        var itemList = document.getElementById("my-list");
                        var template = document.getElementById("list-template");
                        var total = itemList.childElementCount + 1;
                        var clone = template.content.cloneNode(true);

                        clone.querySelector("[data-id='number']").textContent = `${total}`;
                        clone.querySelector("[data-id='title']").textContent = data.name;
                        clone.querySelector("[data-id='content']").textContent = `Status: ${data.status}, Species: ${data.species}`;
                        clone.querySelector("[data-id='image']").src = data.image;

                        itemList.appendChild(clone);
                        characterId++;
                    })
                    .catch(error => console.error('Error fetching data:', error));
            });

            document.querySelector(".btn.btn-light").addEventListener("click", event => {
                var itemList = document.getElementById("my-list");
                itemList.replaceChildren();
            });
        });
