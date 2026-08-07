interface IndicatorProps {
  values: number[];
}

export function Indicator({ values }: IndicatorProps) {
  return (
    <div className="flex items-center gap-1">
      {values.map((width, index) => (
        <div
          key={index}
          className={`h-0.5 rounded-full ${
            index === 0
              ? "bg-foreground"
              : "bg-muted-foreground/30"
          }`}
          style={{
            width: width < 20 ?  20  - width + width  : width,
             backgroundColor:  "black"
          }}
        />
      ))}
    </div>
  );
}