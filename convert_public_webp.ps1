Get-ChildItem -Path "c:\Users\girid\Downloads\NRAIL\client\public" -Include *.jpg,*.jpeg,*.png -Recurse | ForEach-Object {
    $output = [io.path]::ChangeExtension($_.FullName, ".webp")
    if (-not (Test-Path $output)) {
        ffmpeg -i $_.FullName -q:v 75 $output
    }
}
