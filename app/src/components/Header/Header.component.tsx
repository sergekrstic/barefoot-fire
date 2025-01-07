import { FireIcon } from 'assets'

export function Header(): React.JSX.Element {
  return (
    <div className="flex items-center border-b border-violet-600 bg-violet-900 bg-gradient-to-tr from-violet-900 to-violet-600 px-4 py-2">
      <FireIcon className="pr-2 text-violet-400" size={20} />
      <span className="text-xl font-semibold tracking-widest text-violet-400">Barefoot FIRE</span>
    </div>
  )
}
