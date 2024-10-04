import hero from '../../../styles/scss/sections/index/hero.module.scss';

interface Props {
  theme: string;
}

export default function SectionBgColor({ theme }: Props) {
  return (
    <div className={`${hero.heroBackground} ${theme}`}>
      <div className={`${hero.barContainer} noEvents`}>
        <div className={`${hero.barGradient}`}></div>
      </div>
      <div className={`${hero.radialContainer} noEvents`}>
        <div className={`${hero.radialGradient}`}></div>
      </div>
    </div>
  );
}
