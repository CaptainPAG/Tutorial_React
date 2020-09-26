// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// interface AnimalProps {}
// interface AnimalStetes {
//   animal: string;
// }

// React.Componentで書くときは
// propsとstatesのinterfaceをgenericsに含める
// class Animal extends React.Component<AnimalProps, AnimalStetes> {
//   constructor(props: AnimalProps) {
//     super(props);
//     this.state = {
//       animal: "いぬ",
//     };
//     // bindすることで呼び出し可能
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     let newAnimal: string;
//     const { animal } = this.state;
//     if (animal === "いぬ") {
//       newAnimal = "ねこ";
//     } else {
//       newAnimal = "いぬ";
//     }
//     this.setState({ animal: newAnimal });
//   }

//   render() {
//     const { animal } = this.state;
//     return (
//       <div>
//         <h1>ぼくはねこ</h1>
//         <h2>{animal}さ</h2>
//         <button type="button" onClick={() => this.handleClick()}>
//           どっちなんだい？
//         </button>
//       </div>
//     );
//   }
// }

// Stateless FunctinoなComponentの書き方
// https://qiita.com/kotaroito/items/e36ebac185b6b1d8538d#stateless-functions
const Animal: React.FC = () => {
  const [animal, setAnimal] = useState<string>("いぬ");
  const handleClick = () => {
    let newAnimal: string;
    if (animal === "いぬ") {
      newAnimal = "ねこ";
    } else {
      newAnimal = "いぬ";
    }
    setAnimal(newAnimal);
  };

  return (
    <div>
      <h1>ぼくは</h1>
      <h2>{animal}さ</h2>
      <button type="button" onClick={() => handleClick()}>
        クリックで変更
      </button>
    </div>
  );
};

const WhitchAnimal: React.FC = () => {
  // useStateを使えばfunction componentでもstateが扱える。
  // こっちのほうにする方向でReactは進んでいるようです。
  // https://qiita.com/kotaroito/items/e36ebac185b6b1d8538d#%E3%81%A7%E3%81%A9%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E3%81%8C%E3%81%84%E3%81%84%E3%81%AE
  const [count, setCount] = useState(0);

  // アロー関数にしたらちゃんと引数が使えるようです。
  const method = (num: number) => {
    console.log(`Number is ${num}`);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => method(10)}>
        絶対10と表示します
      </button>
    </div>
  );
};

const Main: React.FC = () => {
  function concatName(name: string): string {
    return `${name} Sato`;
  }
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#26A69A",
      },
      secondary: {
        main: "#00bcd4",
      },
    },
  });
  const firstName = "Noriyoshi";
  // map関数で繰り返し<li>を表示します
  const list = ["いぬ", "ねこ", "イグアナ", "うさぎ"].map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    // CustomThemeを適用する方法
    // https://tech-blog.cloud-config.jp/2020-03-18-summary-of-how-to-change-component-colors-in-material-ui/
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">マルチアップローダ</Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <p>concat Names</p>
          <p>{concatName(firstName)}</p>
          <WhitchAnimal />
          <Animal />
          <ul>{list}</ul>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default Main;
