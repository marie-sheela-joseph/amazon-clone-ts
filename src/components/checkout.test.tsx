import { render, screen } from "@testing-library/react"
import Checkout from "./Checkout"
import { AppContext } from "../App"
import { initialState } from "../reducer"

describe('check out',()=>{
    test('total',()=>{
        render(
            <AppContext.Provider value={{state:{...initialState,cart:[3,4]},dispatch:()=>null}}>
        <Checkout></Checkout>
        </AppContext.Provider>)
        const total=screen.getByText(/538\.99/i)
        expect(total).toBeInTheDocument()
    })
})