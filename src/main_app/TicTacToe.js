import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {React , useState , useEffect} from "react";
import _ from 'lodash'
import Swal from "sweetalert2";

export default function TicTacToe(props){

    // const [board , setBoard] = useState(
    //     [
    //         [null,null,null],
    //         [null,null,null],
    //         [null,null,null]
    //     ]
    //     )

    const [ board , setBoard ] = useState([
        null,null,null,null,null,null,null,null,null
    ])


    const [ one , setOne ] = useState('')
    const [ two , setTwo ] = useState('')
    const [ three , setThree ] = useState('')
    const [ four , setFour ] = useState('')
    const [ five , setFive ] = useState('')
    const [ six , setSix ] = useState('')
    const [ seven , setSeven ] = useState('')
    const [ eight , setEight ] = useState('')
    const [ nine , setNine ] = useState('')
    
    const [ oneDisabled , setOneDisabled ] = useState(false)
    const [ twoDisabled , setTwoDisabled ] = useState(false)
    const [ threeDisabled , setThreeDisabled ] = useState(false)
    const [ fourDisabled , setFourDisabled ] = useState(false)
    const [ fiveDisabled , setFiveDisabled ] = useState(false)
    const [ sixDisabled , setSixDisabled ] = useState(false)
    const [ sevenDisabled , setSevenDisabled ] = useState(false)
    const [ eightDisabled , setEightDisabled ] = useState(false)
    const [ nineDisabled , setNineDisabled ] = useState(false)

    const [chance,setChance] = useState(1)
    const [toggle,setToggle] = useState(false)
    
    const [player,setPlayer] = useState('Player 1')

    const [winner,setWinner] = useState('')


    const handleClick = (val) => {

        if(toggle==false)
        {
            const b = board

            b[val-1] = "X"
            setBoard(b)
            
            setPlayer('Player 2')
            setToggle(true)
            switch(val)
            {
                    case 1 :
                    setOne('X')
                    setOneDisabled(true)
                    break;

                    case 2 :
                    setTwo('X')
                    setTwoDisabled(true)

                    break;

                    case 3 :
                    setThree('X')
                    setThreeDisabled(true)
                    break;

                    case 4 :
                    setFour('X')
                    setFourDisabled(true)
                    break;

                    case 5 :
                    setFive('X')
                    setFiveDisabled(true)
                    break;

                    case 6 :
                    setSix('X')
                    setSixDisabled(true)
                    break;

                    case 7 :
                    setSeven('X')
                    setSevenDisabled(true)
                    break;

                    case 8 :
                    setEight('X')
                    setEightDisabled(true)
                    break;

                    case 9 :
                    setNine('X')
                    setNineDisabled(true)
                    break;

            }

            setChance(chance+1)
        }
        else
        {
            const b = board

            b[val-1] = "O"
            setBoard(b)

            setPlayer('Player 1')
            setToggle(false)
            switch(val)
            {
                    case 1 :
                    setOne('O')
                    setOneDisabled(true)
                    break;

                    case 2 :
                    setTwo('O')
                    setTwoDisabled(true)
                    break;

                    case 3 :
                    setThree('O')
                    setThreeDisabled(true)
                    break;

                    case 4 :
                    setFour('O')
                    setFourDisabled(true)
                    break;

                    case 5 :
                    setFive('O')
                    setFiveDisabled(true)
                    break;

                    case 6 :
                    setSix('O')
                    setSixDisabled(true)
                    break;

                    case 7 :
                    setSeven('O')
                    setSevenDisabled(true)
                    break;

                    case 8 :
                    setEight('O')
                    setEightDisabled(true)
                    break;

                    case 9 :
                    setNine('O')
                    setNineDisabled(true)
                    break;

            }

            setChance(chance+1)
        }
        

    }

    useEffect(()=>{

        setOne('')
        setTwo('')
        setThree('')
        setFour('')
        setFive('')
        setSix('')
        setSeven('')
        setEight('')
        setNine('')
        setPlayer('Player 1')
        setWinner('')
        setOneDisabled(false)
        setTwoDisabled(false)
        setThreeDisabled(false)
        setFourDisabled(false)
        setFiveDisabled(false)
        setSixDisabled(false)
        setSevenDisabled(false)
        setEightDisabled(false)
        setNineDisabled(false)

        setToggle(false)

    },[winner])
    
    const resetGame = () => {

        
        setOne('')
        setTwo('')
        setThree('')
        setFour('')
        setFive('')
        setSix('')
        setSeven('')
        setEight('')
        setNine('')
        setPlayer('Player 1')
        setWinner('')
        setOneDisabled(false)
        setTwoDisabled(false)
        setThreeDisabled(false)
        setFourDisabled(false)
        setFiveDisabled(false)
        setSixDisabled(false)
        setSevenDisabled(false)
        setEightDisabled(false)
        setNineDisabled(false)

        setToggle(false)

    }

    if(winner=="Player 1" || winner == "Player 2" || winner == "No One")

    {
        resetGame()
    }


    useEffect(()=>{

        if(one != "" && two != "" && three != "")
        {
            if(one == two && two == three)
            {
                if(one=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }
           
        }
        
        if(four != "" && five != "" && six != "")
        {
            if(four == five && five == six)
            {
                if(four=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }


        }
        
        if(seven != "" && eight != "" && nine != "")
        {
            if(seven == eight && eight == nine)
            {
                if(seven=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                    
                }

                
               
            }
        }
        
        if(one != "" && five != "" && nine != "" )
        {
            if(one == five && five == nine)
            {
                if(one=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

        }   
        
        if(three != "" && five != "" && seven != "")
        {
            if(three == five && five == seven)
            {
                if(three=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }
        }
        
        if(one != "" && four != "" && seven != "")
        {
            if(one == four && four == seven)
            {
                if(one=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }
        }

        if(two != "" && five != "" && eight != "")
        {
            if(two == five && five == eight)
            {
                if(two=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }
               
            }
        }

        if(three != "" && six != "" && nine != "")
        {
            if(three == six && six == nine)
            {
                if(three=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }
        }

        if( one != "" && two != "" && three != "" && four != "" && five != "" && six != "" && seven != "" && eight != "" && nine != "")
        {
            if(one == two && two == three)
            {
                if(one=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }
            else if(four == five && five == six)
            {
                if(four=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

            else if(seven == eight && eight == nine)
            {
                if(seven=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                    
                }

                
               
            }

            else if(one == five && five == nine)
            {
                if(one=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

            else if(three == five && five == seven)
            {
                if(three=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

            else if(one == four && four == seven)
            {
                if(one=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

            else if(two == five && five == eight)
            {
                if(two=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

            else if(three == six && six == nine)
            {
                if(three=="X")
                {
                    Swal.fire({
                        title: 'Player 1 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 1')

                }
                else
                {
                    Swal.fire({
                        title: 'Player 2 Wins The Game !',
                        icon:'success',
                        width:'400',
                        height:'100',
                    })
                    setWinner('Player 2')
                }

                
               
            }

            else
            {
                Swal.fire({
                    title: 'Draw !',
                    icon:'question',
                    width:'400',
                    height:'100',
                })
                setWinner('No One')
    

            }



           
        }

        
        
    })

    return(
        <div style=
        {{
            display:'flex',
            justifyContent:'space-around',
            marginTop:'10vh',
        }}
        >   
            <div style=
            {{
                display:'flex',
                padding:20,
                width:260,
                borderRadius:15,
                border: '2px solid  #7f8fa6',
                backgroundColor: '#30336b',
                
                
            }}
            >            
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card sx={{width:250,height:40,backgroundColor:'#fff'}} variant="outlined">
                        <Card sx={{width:250,height:40,backgroundColor:'#30336b'}} variant="outlined">
                            <Typography color='#fff' sx={{fontSize:25,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    TIC TAC TOE
                                </Typography>
                            </Card>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                    
                        <Typography color='#fff' sx={{fontSize:15}}>
                            {player} Turn . . .
                        </Typography>
            
                    </Grid>
                    <Grid item xs={4}>


                            <CardActionArea disabled={oneDisabled} onClick={()=>handleClick(1)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {one}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={twoDisabled} onClick={()=>handleClick(2)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {two}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={threeDisabled} onClick={()=>handleClick(3)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {three}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={fourDisabled} onClick={()=>handleClick(4)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {four}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={fiveDisabled} onClick={()=>handleClick(5)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {five}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={sixDisabled} onClick={()=>handleClick(6)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {six}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={sevenDisabled} onClick={()=>handleClick(7)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {seven}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={eightDisabled} onClick={()=>handleClick(8)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {eight}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                            <CardActionArea disabled={nineDisabled} onClick={()=>handleClick(9)}>
                        <Card sx={{width:70,height:70}} variant="outlined">
                                <Typography sx={{display:'flex',justifyContent:'center',fontSize:40}}>
                                    {nine}
                                </Typography>
                        </Card>
                            </CardActionArea>
                    </Grid>
                    
            
                </Grid>        
            </div>

        
        </div>
    )

}