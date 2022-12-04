
import React from "react"
import { v4 as uuidv4 } from "uuid";
import SpelarTabell from "./SpelarTabell"
import NySpelare from "./NySpelare"

class AllaSpelare extends React.Component {
  state = {
    spelarDB: [
      {
        id: uuidv4(),
        spelare: "Karl Fredsriksson",
        position: "Vänsterback",
        gradering: "Okej"
      },
      {
        id: uuidv4(),
        spelare: "Martin Svensson",
        position: "Högerback",
        gradering: "Okej"
      },
      {
        id: uuidv4(),
        spelare: "Nils Levander",
        position: "Libro",
        gradering: "Lovande"

      },
      {
        id: uuidv4(),
        spelare: "Sven-hugo Ericsson",
        position: "Målvakt",
        gradering: "Enastående!"

      },
      {
        id: uuidv4(),
        spelare: "Jacob smedberg",
        position: "Vänster mittfältare",
        gradering: "Lovande"

      },
      {
        id: uuidv4(),
        spelare: "Peter Brorsson Dalgren",
        position: "Vänsterytter",
        gradering: "Okej"

      },
      {
        id: uuidv4(),
        spelare: "Mats Ekgren",
        position: "Högerytter",
        gradering: "Okej"

      },
      {
        id: uuidv4(),
        spelare: "Johan blixten Andersson ",
        position: "Höger mittfältare",
        gradering: "Lovande"

      }
    ]
  };
 
  handleChange = (id) => {
    this.setState(prevState => ({
      spelarDB: prevState.spelarDB.map(spelare => {
        if (spelare.id === id) {
          return {
            ...spelare,
          }
        }
        return spelare
      }),
    }))
  };

  delspelare = id => {
    this.setState({
      spelarDB: [
        ...this.state.spelarDB.filter(spelare => {
          return spelare.id !== id;
        })
      ]
    });
  };



  addSpelare = (spelare, position, gradering) => {
    const newspelare = {
      id: uuidv4(),
      spelare: spelare,
      position: position,
      gradering: gradering
    };
    this.setState({
      spelarDB: [...this.state.spelarDB, newspelare]
    });
  };

  setUpdate = (updatedSpelare, id) => {
    this.setState({
      spelarDB: this.state.spelarDB.map(spelare => {
        if (spelare.id === id) {
          spelare.spelare = updatedSpelare
        }
        return spelare
      }),
    })
  }

  setUpdatePos = (updatedSpelarePos, id) => {
    this.setState({
      spelarDB: this.state.spelarDB.map(spelare => {
        if (spelare.id === id) {
          spelare.position = updatedSpelarePos
        }
        return spelare
      }),
    })
  }

  setUpdateGrad = (updatedSpelareGrad, id) => {
    this.setState({
      spelarDB: this.state.spelarDB.map(spelare => {
        if (spelare.id === id) {
          spelare.gradering = updatedSpelareGrad
        }
        return spelare
      }),
    })
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <h1 className="sidTopp">Lagbyggaren - Knattetränarens bäste vän</h1>
          <SpelarTabell
          spelarDB={this.state.spelarDB}
            handleChangeProps={this.handleChange}
            deleteSpelareProps={this.delspelare}
            setUpdate={this.setUpdate}
            setUpdatePos={this.setUpdatePos}
            setUpdateGrad={this.setUpdateGrad}
          />
          <br></br> <br></br>
          <NySpelare addSpelareProps={this.addSpelare} />

        </div>
      </div>
    );
  }
}

export default AllaSpelare