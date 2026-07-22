import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="flex w-24 flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center shadow-lg backdrop-blur-sm sm:w-28"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <p className="mt-2 text-[0.7rem] font-medium text-secondary sm:text-sm">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")