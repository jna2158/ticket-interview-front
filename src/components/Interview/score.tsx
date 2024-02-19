import React from "react"
import styled from "styled-components"

export default function Score({ data, idx }: any) {
  const textColor = data.score === 0 ? "text-warning" : ""
  return (
    <Wrapper>
      <div className="accordion" id="scoreAccordion">
        <div className="card">
          <div className="card-header" id={idx}>
            <h2 className="mb-0">
              <button className={"btn btn-block text-left" + " " + textColor} type="button" data-toggle="collapse" data-target={"#collapseOne" + idx} aria-expanded="true" aria-controls={"collapseOne" + idx}>
                { Object.keys(data)[0] }
              </button>
            </h2>
          </div>
          <div id={"collapseOne" + idx} className="collapse" aria-labelledby={idx} data-parent="#scoreAccordion">
            <div className="card-body">
              { data[Object.keys(data)[0]] }
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 2vh;
`;
