import { FireIcon } from 'assets'

export function Header(): React.JSX.Element {
  return (
    <div className="flex items-center border-b border-violet-600 bg-violet-900 px-4 py-2">
      <FireIcon className="pr-2 text-violet-400" size={20} />
      <span className="text-xl font-semibold tracking-widest text-violet-400">Unnamed App</span>
      {/* <span className="via-yellow-100 inline-block bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-4xl font-extrabold tracking-widest text-transparent">
        Barefoot FIRE
      </span> */}
    </div>
  )
}
