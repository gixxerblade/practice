
interface Field {
    name: string
    area?: number
    cropZones?: CropZone[]
}

interface CropZone {
    name: string,
    area: number
}

const input = {
    fields: [
        {
            name: "Field 1",
            area: 20
        },
        {
            name: "Field 2",
            cropZones: [
                { name: "Zone 1", area: 12 },
                { name: "Zone 2", area: 18 }
            ]
        },
        {
            name: "Field 3",
            area: 3
        },
        {
            name: "Field 4",
            cropZones: [
                { name: "Zone 1", area: 100 },
                { name: "Zone 2", area: 70 }
            ]
        },
    ]
};

function sort(input: { fields: Field[] }): {field: Field, profit: number}[] {
    const fixedCostPerField = 50;
    const costPerArea = 4;
    const revenuePerArea = 20;

    const sortedFields: {field: Field, profit: number}[] = []

    //1. For each field, find the area
    // 2. Calculate the profit based on Area
    for(const field of input.fields){
        
        let area = 0;

        if(field?.area){
            area = field.area;
        }else if(field?.cropZones){
            for(const cropZone of field.cropZones){
                area += cropZone.area
            }
        }

        let profit = area * (revenuePerArea - costPerArea) - fixedCostPerField;

        sortedFields.push({field, profit})
    }

    // 3. Sort

    return sortedFields.sort((a,b)=>a.profit - b.profit);
}

sort(input).forEach( ({field, profit}) => {
    console.log(`${field.name} -> ${profit}`);
});

// profit = (area * revenuePerArea) - (area * costPerArea) - fixedCostPerField
// profitPerArea = revenuePerArea - costPerArea
// profit = (area * profitPerArea) - fixedCostPerField

// If the input.fields has area then (area * costPerArea + 50) * 20
// If cropsZones  sort(cropsZones) area * costPerArea + 50