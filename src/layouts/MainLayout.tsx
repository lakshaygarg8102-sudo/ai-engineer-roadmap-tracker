export default function MainLayout({

children

}:{

children:React.ReactNode

}){

return(

<div
className="min-h-screen bg-background text-white">

{children}

</div>

);

}