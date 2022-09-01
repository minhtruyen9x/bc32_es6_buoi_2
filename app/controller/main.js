import Glass, { getData } from "../model/Glass.js"


let glasses


getData()
    .then(dataGlasses => {
        glasses = dataGlasses.map(({ id, src, virtualImg, brand, name, color, price, description }) => {
            return new Glass(id, src, virtualImg, brand, name, color, price, description)
        })
        renderGlass(glasses)
    })


document.querySelector("#beforeBtn").onclick = () => { removeGlasses(true) }
document.querySelector("#afterBtn").onclick = () => { removeGlasses(false) }

document.querySelector("#vglassesList").addEventListener("click", (e) => {
    const target = e.target
    const targetType = target.dataset.type
    if (!targetType) return

    if (targetType === "glass") {
        const targetID = target.dataset.id
        const glass = glasses.find(glass => glass.id === targetID)

        document.querySelector('[data-type="glass"].active')?.classList.remove("active")
        target.classList.add("active")

        document.querySelector("#avatar").innerHTML = glass.getHtmlGlass()
        document.querySelector("#glassesInfo").innerHTML = glass.getHtmlInfo()
        document.querySelector("#glassesInfo").style.display = "block"
    }
})

function renderGlass(glasses) {
    const container = document.querySelector("#vglassesList")
    const htmls =
        glasses
            .map(glass => glass.getHtmlImage())
            .join("")

    container.innerHTML = htmls
}

function removeGlasses(isRemove) {
    const glassImg = document.querySelector("#avatar").querySelector("img")

    if (!glassImg) return

    if (isRemove) {
        glassImg.style.display = "none"
    }
    else {
        glassImg.style.display = "block"
    }
}
