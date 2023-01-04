<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="kishan">
<xsl:template match="/">
<html>
<body>
<table>
<tr>
<th>
Name
</th>
<th>RollNo</th></tr>
<xsl:for-each select="college/class">
<tr>
<td><xsl:Value-of Select="Name"/></td>
<td><xsl:Value-of Select="RollNo"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>