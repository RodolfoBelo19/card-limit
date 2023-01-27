import {FormatValue} from "./FormatValue";
import {ICard} from "../pages/interfaces/Card";

export const Card = ({data}: any) => {
  return (
    <div
      className="flex sm:flex-row flex-col w-full p-1 text-white">
      {
        data.map((card: ICard) => {
          return (
            <div key={card.name}>
              <div
                className="bg-zinc-800 flex m-2 items-center rounded-2xl p-5"
                style={{backgroundImage: `url(/images/${card.name}.png)`}}
              >
                <div className="w-full">
                  <p className="flex">
                    <strong className="mx-2">name:</strong>
                    {card.name}
                  </p>
                  <p className="flex">
                    <strong className="mx-2">total limit:</strong>
                    <FormatValue value={card.limit}/>
                  </p>
                  <p className="flex">
                    <strong className="mx-2">available:</strong>
                    <FormatValue value={card.available}/>
                  </p>
                  <p className="flex">
                    <strong className="mx-2">used:</strong>
                    <FormatValue value={card.used}/>
                  </p>
                </div>
                <div>
                  {
                    card.type === 'mastercard' ? (
                      <img
                        src={"https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png"}
                        alt="mastercard"
                        className="w-20"
                      />
                    ) : (
                      <img
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1280px-Old_Visa_Logo.svg.png"}
                        alt="visa"
                        className="w-20"
                      />
                    )
                  }
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}