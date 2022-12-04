import React from "react"
import SpelareITabell from "./SpelareITabell"

class SpelarTabell extends React.Component {
    render() {
      return (
        <table>
          <tbody>
            <tr>
              <th>Spelarnamn</th>
              <th>Postion</th>
              <th>Gradering</th>
            </tr>
            {this.props.spelarDB.map(spelare => (
              //SpelareITabell(spelare)  //om funk, (då man kör hoks)
              <SpelareITabell
                key={spelare.id}
                spelare={spelare}
                handleChangeProps={this.props.handleChangeProps}
                deleteSpelareProps={this.props.deleteSpelareProps}
                setUpdate={this.props.setUpdate}
              />
            ))}
          </tbody>
        </table>
      )
    }
  }

export default SpelarTabell