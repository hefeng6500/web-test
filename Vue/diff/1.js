let originalHTML = `
<p>Hello Batman, decide what to do:</p>
<table>
<tbody>
<tr>
<td>s</td>
<td>a</td>
<td>b1</td>
</tr>
<tr>
<td>s</td>
<td>y</td>
<td>x</td>
</tr>
<tr>
<td>s</td>
<td>1</td>
<td>2</td>
</tr>
</tbody>
</table>

<ul><li>Kill The Joker</li><li>Save Thalia Al Gul</li><li>Save Gotham</li></ul><h4>I am a heading 4</h4>`;

let newHTML = `<p>Hello Mr. Wayne, decide what to do:</p>
<p>Call Alfred, take Thalia Al Gul to the cinema, save Gotham</p>
<table>
<tbody>
<tr>
<td>s</td>
<td>a</td>
<td>b1</td>
</tr>
<tr>
<td>s</td>
<td>y</td>
<td>x</td>
</tr>
<tr>
<td><p>ssiludfhgljkshdflkgjhlskdfjg bkm,nb,mnb,mnb,mnb ,mnb,mnb,mnb ,mnb,mnb ,mnb ,mnb ,mnb ,mnb,mnb ,mnb </p></td>
<td>1</td>
<td>2</td>
</tr>
</tbody>
</table>
<span>Use the mouse to choose an option.</span>`;

// Diff HTML strings
let output = htmldiff(originalHTML, newHTML);

// Show HTML diff output as HTML (crazy right?)!
document.getElementById("output").innerHTML = output;
document.getElementById("outputOriginal").innerHTML = originalHTML;
document.getElementById("outputNew").innerHTML = newHTML;