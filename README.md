# ttt3D
3D tic tac toe game built with Javascript and jQuery

# How to Play?
TTT3D is similar to the good old 2D tic-tac-toe (TTT) game only in 3D.
This means that instead of a 2D grid, you have 3D cube (separted into 3 plains for UI purposes)

The game is meant for 2 players, X's and O's. The goal of each player is to build a straight line of his own 
symbols along the straight lines or diagonals of the cube.

<img src='http://icon-park.com/imagefiles/rubiks_cube_gray.png' height="200">

<b>Simple examples (Similar to 2D TTT)</b>

Straight row (in the first plain, along the columns)

<table>
<tr>
<td>
  <table>
  <tr><td>x</td><td>x</td><td>x</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
</tr>
</table>


Straight Column (in the first plain, along the rows)

<table>
<tr>
<td>
  <table>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
</tr>
</table>

Diagonal (in the first plain, along the rows and columns)

<table>
<tr>
<td>
  <table>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>x</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>x</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
</tr>
</table>

<br>
<b>Advanced moves</b>

Straight plain (in the first column, in the first row)

<table>
<tr>
<td>
  <table>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
</tr>
</table>

Straight column (in the first row, along the plains)

<table>
<tr>
<td>
  <table>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
<td>
  <table>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  <tr><td>x</td><td>&nbsp;</td><td>&nbsp;</td></tr>
  </table>
</td>
</tr>
</table>


