function All() {

    const data = [
        {
            name: "nirmal"
        }
    ]
    return (
        <>
            {
                data.map((items) => {
                    return (
                        <>

                            <h1>{items.name}</h1>
                        </>
                    )
                })
            }
        </>
    )
}

All();