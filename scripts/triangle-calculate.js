/*
* Objective: get base, height of a triangle. 
Calculate the area by using the provided formula. and then display the area.
*
*/ 



function calculateTriangleArea(){
    // get the base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // get the height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle', area);


     // display triangle area
   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;
}

  