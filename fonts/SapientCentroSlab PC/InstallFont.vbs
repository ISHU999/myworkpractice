Option Explicit

Dim objShell, objFSO, wshShell
Dim strFontSourcePath, objFolder, objFont, objNameSpace, objFile,x,y

Set objShell = CreateObject("Shell.Application")
Set wshShell = CreateObject("WScript.Shell")
Set objFSO = createobject("Scripting.Filesystemobject")

'Wscript.Echo "--------------------------------------"
'Wscript.Echo " Install Fonts "
'Wscript.Echo "--------------------------------------"
'Wscript.Echo " "

strFontSourcePath = "C:\Intel32\SANewFonts\"

If objFSO.FolderExists(strFontSourcePath) Then

Set objNameSpace = objShell.Namespace(strFontSourcePath)
Set objFolder = objFSO.getFolder(strFontSourcePath)
'x=msgbox ("Hi ," & chr(13) &  chr(13) &  "A new Sapient Font is being Installed on your Computer." & chr(13) &chr(13) & "-Thanks,"& chr(13) &  "Sapient IT Team"& chr(13) &chr(13) &  "Need More Information : " &chr(13) & "Please feel free to reach out - ITWindowsTeam@Sapient.com", 64 , "Sapient IT - Windows Team")


For Each objFile In objFolder.files
 If LCase(right(objFile,4)) = ".ttf" OR LCase(right(objFile,4)) = ".otf" Then
  If objFSO.FileExists("C:\Windows\Fonts\" & objFile.Name) Then
   'Wscript.Echo "Font already installed: " & objFile.Name
  Else
   Set objFont = objNameSpace.ParseName(objFile.Name)
   objFont.InvokeVerb("Install")
   'Wscript.Echo "Installed Font: " & objFile.Name
   Set objFont = Nothing
  End If
 End If
Next
Else
End If
'y=msgbox ("Installation of Font Complete.. Thanks for your time.", 64 , "Sapient IT - Windows Team")