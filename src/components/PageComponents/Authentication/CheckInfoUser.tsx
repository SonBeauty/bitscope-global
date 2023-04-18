interface ArrRender {
  name: string
  number: string
  color: string
}
interface CheckInfoUserProps {
  icon: any
  social: string
  src: string
  name: string
  username: string
  iconJoin: any
  textJoin: string
  arrRender: ArrRender[]
  sizeItem: string
}
export default function CheckInfoUser({
  icon,
  social,
  src,
  name,
  username,
  iconJoin,
  textJoin,
  arrRender,
  sizeItem
}: CheckInfoUserProps) {
  return (
    <div className="bg-background border-2 flex py-6 flex-col items-center justify-center w-full rounded-lg">
      <div className="w-full mb-4 flex items-center gap-2 justify-center text-sky-600">
        {icon}
        <span className="text-center text-base font-normal">{social}</span>
      </div>
      <div className="w-full">
        <div className="border-b-2 w-full"></div>
        <div className="px-1 pt-6 flex items-center gap-8 sm:px-8 justify-between lg:flex-row flex-col">
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <picture>
              <img
                className="rounded-full"
                src={src}
                width={107}
                height={107}
                alt="avatar"
              />
            </picture>
            <div>
              <h4 className="font-bold text-2xl">{name}</h4>
              <span className="font-normal text-sky-400 text-base">{username}</span>
              <div className="flex items-center gap-2">
                {iconJoin}
                <span className="font-nomal text-base">{textJoin}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 flex-wrap justify-center items-center">
            {arrRender.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${sizeItem} flex flex-col gap-4 ${item.color} py-4 px-8 rounded-2xl`}
                >
                  <span className="text-sm font-semibold">{item.name}</span>
                  <span className="text-2xl font-semibold">{item.number}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
