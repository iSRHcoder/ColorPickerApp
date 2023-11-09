/* eslint-disable no-dupe-else-if */
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./ColorPicker.module.css";
import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [allColor, setAllColor] = useState([
    "#6C9130",
    "#2678A4",
    "#FEF654",
    "greenYellow",
  ]);
  const [boxColor, setBoxColor] = useState("");

  const colorsData = [
    {
      hex: "#CD5C5C",
      name: "INDIANRED",
    },
    {
      hex: "#F08080",
      name: "LIGHTCORAL",
    },
    {
      hex: "#FA8072",
      name: "SALMON",
    },
    {
      hex: "#E9967A",
      name: "DARKSALMON",
    },
    {
      hex: "#FFA07A",
      name: "LIGHTSALMON",
    },
    {
      hex: "#DC143C",
      name: "CRIMSON",
    },
    {
      hex: "#FF0000",
      name: "RED",
    },
    {
      hex: "#8B0000",
      name: "DARKRED",
    },
    {
      hex: "#FFC0CB",
      name: "PINK",
    },
    {
      hex: "#FFB6C1",
      name: "LIGHTPINK",
    },
    {
      hex: "#FF69B4",
      name: "HOTPINK",
    },
    {
      hex: "#FF1493",
      name: "DEEPPINK",
    },
    {
      hex: "#C71585",
      name: "MEDIUMVIOLETRED",
    },
    {
      hex: "#DB7093",
      name: "PALEVIOLETRED",
    },
    {
      hex: "#FF7F50",
      name: "CORAL",
    },
    {
      hex: "#FF6347",
      name: "TOMATO",
    },
    {
      hex: "#FF4500",
      name: "ORANGERED",
    },
    {
      hex: "#FF8C00",
      name: "DARKORANGE",
    },
    {
      hex: "#FFA500",
      name: "ORANGE",
    },
    {
      hex: "#FFD700",
      name: "GOLD",
    },
    {
      hex: "#FFFF00",
      name: "YELLOW",
    },
    {
      hex: "#FFFFE0",
      name: "LIGHTYELLOW",
    },
    {
      hex: "#FFFACD",
      name: "LEMONCHIFFON",
    },
    {
      hex: "#FAFAD2",
      name: "LIGHTGOLDENRODYELLOW",
    },
    {
      hex: "#FFEFD5",
      name: "PAPAYAWHIP",
    },
    {
      hex: "#FFE4B5",
      name: "MOCCASIN",
    },
    {
      hex: "#FFDAB9",
      name: "PEACHPUFF",
    },
    {
      hex: "#EEE8AA",
      name: "PALEGOLDENROD",
    },
    {
      hex: "#F0E68C",
      name: "KHAKI",
    },
    {
      hex: "#BDB76B",
      name: "DARKKHAKI",
    },
    {
      hex: "#E6E6FA",
      name: "LAVENDER",
    },
    {
      hex: "#D8BFD8",
      name: "THISTLE",
    },
    {
      hex: "#DDA0DD",
      name: "PLUM",
    },
    {
      hex: "#EE82EE",
      name: "VIOLET",
    },
    {
      hex: "#DA70D6",
      name: "ORCHID",
    },
    {
      hex: "#FF00FF",
      name: "FUCHSIA",
    },
    {
      hex: "#FF00FF",
      name: "MAGENTA",
    },
    {
      hex: "#BA55D3",
      name: "MEDIUMORCHID",
    },
    {
      hex: "#9370DB",
      name: "MEDIUMPURPLE",
    },
    {
      hex: "#663399",
      name: "REBECCAPURPLE",
    },
    {
      hex: "#8A2BE2",
      name: "BLUEVIOLET",
    },
    {
      hex: "#9400D3",
      name: "DARKVIOLET",
    },
    {
      hex: "#9932CC",
      name: "DARKORCHID",
    },
    {
      hex: "#8B008B",
      name: "DARKMAGENTA",
    },
    {
      hex: "#800080",
      name: "PURPLE",
    },
    {
      hex: "#4B0082",
      name: "INDIGO",
    },
    {
      hex: "#6A5ACD",
      name: "SLATEBLUE",
    },
    {
      hex: "#483D8B",
      name: "DARKSLATEBLUE",
    },
    {
      hex: "#7B68EE",
      name: "MEDIUMSLATEBLUE",
    },
    {
      hex: "#ADFF2F",
      name: "GREENYELLOW",
    },
    {
      hex: "#7FFF00",
      name: "CHARTREUSE",
    },
    {
      hex: "#7CFC00",
      name: "LAWNGREEN",
    },
    {
      hex: "#00FF00",
      name: "LIME",
    },
    {
      hex: "#32CD32",
      name: "LIMEGREEN",
    },
    {
      hex: "#98FB98",
      name: "PALEGREEN",
    },
    {
      hex: "#90EE90",
      name: "LIGHTGREEN",
    },
    {
      hex: "#00FA9A",
      name: "MEDIUMSPRINGGREEN",
    },
    {
      hex: "#00FF7F",
      name: "SPRINGGREEN",
    },
    {
      hex: "#3CB371",
      name: "MEDIUMSEAGREEN",
    },
    {
      hex: "#2E8B57",
      name: "SEAGREEN",
    },
    {
      hex: "#228B22",
      name: "FORESTGREEN",
    },
    {
      hex: "#008000",
      name: "GREEN",
    },
    {
      hex: "#006400",
      name: "DARKGREEN",
    },
    {
      hex: "#9ACD32",
      name: "YELLOWGREEN",
    },
    {
      hex: "#6B8E23",
      name: "OLIVEDRAB",
    },
    {
      hex: "#6B8E23",
      name: "OLIVE",
    },
    {
      hex: "#556B2F",
      name: "DARKOLIVEGREEN",
    },
    {
      hex: "#66CDAA",
      name: "MEDIUMAQUAMARINE",
    },
    {
      hex: "#8FBC8B",
      name: "DARKSEAGREEN",
    },
    {
      hex: "#20B2AA",
      name: "LIGHTSEAGREEN",
    },
    {
      hex: "#008B8B",
      name: "DARKCYAN",
    },
    {
      hex: "#008080",
      name: "TEAL",
    },
    {
      hex: "#00FFFF",
      name: "AQUA",
    },
    {
      hex: "#00FFFF",
      name: "CYAN",
    },
    {
      hex: "#E0FFFF",
      name: "LIGHTCYAN",
    },
    {
      hex: "#AFEEEE",
      name: "PALETURQUOISE",
    },
    {
      hex: "#7FFFD4",
      name: "AQUAMARINE",
    },
    {
      hex: "#40E0D0",
      name: "TURQUOISE",
    },
    {
      hex: "#48D1CC",
      name: "MEDIUMTURQUOISE",
    },
    {
      hex: "#00CED1",
      name: "DARKTURQUOISE",
    },
    {
      hex: "#5F9EA0",
      name: "CADETBLUE",
    },
    {
      hex: "#4682B4",
      name: "STEELBLUE",
    },
    {
      hex: "#B0C4DE",
      name: "LIGHTSTEELBLUE",
    },
    {
      hex: "#B0E0E6",
      name: "POWDERBLUE",
    },
    {
      hex: "#ADD8E6",
      name: "LIGHTBLUE",
    },
    {
      hex: "#87CEEB",
      name: "SKYBLUE",
    },
    {
      hex: "#87CEFA",
      name: "LIGHTSKYBLUE",
    },
    {
      hex: "#00BFFF",
      name: "DEEPSKYBLUE",
    },
    {
      hex: "#1E90FF",
      name: "DODGERBLUE",
    },
    {
      hex: "#6495ED",
      name: "CORNFLOWERBLUE",
    },
    {
      hex: "#4169E1",
      name: "ROYALBLUE",
    },
    {
      hex: "#0000FF",
      name: "BLUE",
    },
    {
      hex: "#0000CD",
      name: "MEDIUMBLUE",
    },
    {
      hex: "#00008B",
      name: "DARKBLUE",
    },
    {
      hex: "#00008B",
      name: "NAVY",
    },
    {
      hex: "#191970",
      name: "MIDNIGHTBLUE",
    },
    {
      hex: "#FFF8DC",
      name: "CORNSILK",
    },
    {
      hex: "#FFEBCD",
      name: "BLANCHEDALMOND",
    },
    {
      hex: "#FFE4C4",
      name: "BISQUE",
    },
    {
      hex: "#FFDEAD",
      name: "NAVAJOWHITE",
    },
    {
      hex: "#F5DEB3",
      name: "WHEAT",
    },
    {
      hex: "#DEB887",
      name: "BURLYWOOD",
    },
    {
      hex: "#D2B48C",
      name: "TAN",
    },
    {
      hex: "#BC8F8F",
      name: "ROSYBROWN",
    },
    {
      hex: "#F4A460",
      name: "SANDYBROWN",
    },
    {
      hex: "#DAA520",
      name: "GOLDENROD",
    },
    {
      hex: "#B8860B",
      name: "DARKGOLDENROD",
    },
    {
      hex: "#CD853F",
      name: "PERU",
    },
    {
      hex: "#D2691E",
      name: "CHOCOLATE",
    },
    {
      hex: "#8B4513",
      name: "SADDLEBROWN",
    },
    {
      hex: "#A0522D",
      name: "SIENNA",
    },
    {
      hex: "#A52A2A",
      name: "BROWN",
    },
    {
      hex: "#800000",
      name: "MAROON",
    },
    {
      hex: "#FFFFFF",
      name: "WHITE",
    },
    {
      hex: "#FFFAFA",
      name: "SNOW",
    },
    {
      hex: "#F0FFF0",
      name: "HONEYDEW",
    },
    {
      hex: "#F5FFFA",
      name: "MINTCREAM",
    },
    {
      hex: "#F0FFFF",
      name: "AZURE",
    },
    {
      hex: "#F0F8FF",
      name: "ALICEBLUE",
    },
    {
      hex: "#F8F8FF",
      name: "GHOSTWHITE",
    },
    {
      hex: "#F5F5F5",
      name: "WHITESMOKE",
    },
    {
      hex: "#FFF5EE",
      name: "SEASHELL",
    },
    {
      hex: "#F5F5DC",
      name: "BEIGE",
    },
    {
      hex: "#FDF5E6",
      name: "OLDLACE",
    },
    {
      hex: "#FDF5E6",
      name: "FLORALWHITE",
    },
    {
      hex: "#FFFFF0",
      name: "IVORY",
    },
    {
      hex: "#FAEBD7",
      name: "ANTIQUEWHITE",
    },
    {
      hex: "#FAF0E6",
      name: "LINEN",
    },
    {
      hex: "#FFF0F5",
      name: "LAVENDERBLUSH",
    },
    {
      hex: "#FFE4E1",
      name: "MISTYROSE",
    },
    {
      hex: "#DCDCDC",
      name: "GAINSBORO",
    },
    {
      hex: "#D3D3D3",
      name: "LIGHTGRAY",
    },
    {
      hex: "#C0C0C0",
      name: "SILVER",
    },
    {
      hex: "#A9A9A9",
      name: "DARKGRAY",
    },
    {
      hex: "#808080",
      name: "GRAY",
    },
    {
      hex: "#696969",
      name: "DIMGRAY",
    },
    {
      hex: "#778899",
      name: "LIGHTSLATEGRAY",
    },
    {
      hex: "#708090",
      name: "SLATEGRAY",
    },
    {
      hex: "#2F4F4F",
      name: "DARKSLATEGRAY",
    },
    {
      hex: "#000000",
      name: "BLACK",
    },
    {
      hex: "#808080",
      name: "GREY",
    },
    {
      hex: "#8F00FF",
      name: "VIOLET",
    },
  ];

  const findColor = () => {
    for (const clr of colorsData) {
      if (
        color.toLowerCase() === clr.name.toLowerCase() ||
        color.toLowerCase() === clr.hex.toLowerCase() ||
        color.toLowerCase().includes("#")
      ) {
        return color;
      }
    }
  };

  const isValidColor = (value) => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
  };

  const clickHandler = () => {
    const backgroundColor = findColor() || isValidColor(color);
    setBgColor(backgroundColor);
    const colorArr = [...allColor];
    if (
      !colorArr.includes(backgroundColor.toLowerCase()) &&
      backgroundColor.toLowerCase() !== ""
    ) {
      colorArr.push(backgroundColor);
    }

    if (colorArr.length > 9) {
      colorArr.shift();
    }

    setAllColor(colorArr);
    setColor("");
  };

  const clrClickPalleteHandler = (index) => {
    setBoxColor(allColor[index]);
    setBgColor("");
  };

  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <div className={styles.ColorPicker}>
        <div className={styles.Div}>
          <Input
            value={color}
            enterKeyHandler={clickHandler}
            changeHandler={(data) => {
              setColor(data);
            }}
          />
          <Button clickHandler={clickHandler} />
        </div>
        <div
          style={{
            width: "20rem",
            height: "20rem",
            backgroundColor: bgColor || boxColor,
          }}
        ></div>
        <div className={styles.colorPallete}>
          {allColor.map((color, index) => {
            return (
              <div
                key={index}
                onClick={() => clrClickPalleteHandler(index)}
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: color,
                  marginLeft: ".6rem",
                  border: ".2rem solid black",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
