import "./Ad.css";

interface Props {
  flavor: string;
  fontSize: number;
  darkMode: boolean;
}

const Ad = ({ flavor, fontSize, darkMode }: Props) => {
  const adStyles: any = { fontSize: `${fontSize}px` };
  return (
    <div className={`Ad${darkMode ? " dark" : ""}`}>
      <p>Vote For</p>
      <p style={adStyles} className="flavor">
        {flavor}
      </p>
    </div>
  );
};

export default Ad;
