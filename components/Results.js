import React from "react"
import Thumbnail from "./Thumbnail"


const Results = ({ request }) => {
      return (
            <div>
                  {request.map((result) => {
                        return (
                              <>
                                    <Thumbnail key={result.id} result={result} />
                              </>
                        )
                  }

                  )}
            </div>
      )
}

export default Results
