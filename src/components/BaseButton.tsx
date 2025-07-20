function BaseButton(props: any) {
  return (
    <a href="https://api.whatsapp.com/send/?phone=54346406944&text=Hola%20KairoSoft%2C%20quiero%20contactarte%20con%20tu%20equipo%20de%20desarrollo%20para%20que%20te%20ayudemos%20a%20crear%20un%20producto%20increible%20para%20mi%20empresa." target="_blank" rel="noreferrer">
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors hover:cursor-pointer">
        {props.children}
      </button>
    </a>
  )
}

export default BaseButton