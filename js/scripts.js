document.getElementById('file').onchange = function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = function(progressEvent){
    // Entire file
    //   console.log(this.result);
  
      // Käy rivit läpi
        var lines = this.result.split('\n');
        var patternArray=[''];
        var patternArray2=[''];
        var patternArray3=[''];

        // Laitetaan tiedostosta saadut rivit(lines) taulukkoon patternArray
        for (var i=0;i<lines.length;i++){
            patternArray[i]=lines[i];
            // console.log(patternArray[i]);
        }
        // console.log(patternArray[0].length);

        // Mennään rivi kerrallaan patternArrayn taulukon dataa läpi
        for(var line = 0, o=0,line2="",line3="",line4="",line5="", arrayIndex=0; arrayIndex<patternArray.length; line++,o++,arrayIndex++){

            // Montako uutta riviä tehdään
          for ( var i=0, lineCh=patternArray[arrayIndex];i<100;i++){

            // tehdaan uusi rivi edellisen perusteella
            for (var lineIndex=0, filled=0;lineIndex<lineCh.length;lineIndex++){


                    if (lineCh.charAt(lineIndex)=='.'){
                
                       if (lineCh.charAt(lineIndex-1)=='#'){
                        filled++;
                       } 
                       if (lineCh.charAt(lineIndex-2)=='#'){
                        filled++;
                       } 
                       if (lineCh.charAt(lineIndex+1)=='#'){
                        filled++;
                       } 
                       if (lineCh.charAt(lineIndex+2)=='#'){
                        filled++;
                       } 
                       if (filled==0){
                        // patternArray[arrayIndex+1]+='.';
                        line2+='.';
                        filled=0;
                       }
                       if (filled==1){
                        line2+='.';
                        filled=0;
                       }
                       if (filled==2){
                        line2+='#';
                        filled=0;
                       }
                       if (filled==3){
                        line2+='#';
                        filled=0;
                       }
                       if (filled==4){
                        line2+='.';
                        filled=0;
                       }
                    } 

                    if (lineCh.charAt(lineIndex)=='#'){
                       if (lineCh.charAt(lineIndex-1)=='#'){
                        filled++;
                       } 
                       if (lineCh.charAt(lineIndex-2)=='#'){
                        filled++;
                       } 
                       if (lineCh.charAt(lineIndex+1)=='#'){
                        filled++;
                       } 
                       if (lineCh.charAt(lineIndex+2)=='#'){
                        filled++;
                       } 
                       if (filled==0){
                        line2+='.';
                        filled=0;
                       }
                       if (filled==1){
                        line2+='.';
                        filled=0;
                       }
                       if (filled==2){
                        line2+='#';
                        filled=0;
                       }
                       if (filled==3){
                        line2+='.';
                        filled=0;
                       }
                       if (filled==4){
                        line2+='#';
                        filled=0;
                       }
                    }
            } 
            // console.log(line2);
            lineCh=line2;

            // Lisätään uusi rivi tsekkaustaulukkoon pattternArray2
            patternArray2[i]=line2;

            line2="";

            console.log(patternArray2[i]);
            // Rivien tarkastus
            if (patternArray2[i].includes('#')===false){
                patternArray3[arrayIndex]= 'Vanishing';
                // console.log(patternArray2[i]+ ' '+patternArray2[i-2]);
            }
            else if (patternArray2[i]==patternArray2[i-2]){
                patternArray3[arrayIndex]= 'Blinking';
                // console.log(patternArray2[i]+ ' '+patternArray2[i-2]);
            }
            else {
                patternArray3[arrayIndex]= 'Other';
            }
        }
        console.log(patternArray3[arrayIndex]);
      };
    };
    reader.readAsText(file);
  };

  // console.log(lines[line]);
            // console.log(line2);
            // console.log(line3);
            // console.log(line4);
            // console.log(line5);
            // line2="";
            // line3="";
            // line4="";
            // line5="";
             /*      
            for (var lineIndex=0,lineCh="", filled=0;lineIndex<lines[line].length-1;lineIndex++){
                    
                        if (line2.charAt(lineIndex)=='.'){
                    
                           if (line2.charAt(lineIndex-1)=='#'){
                            filled++;
                            // line2+="!1";
                           } 
                           if (line2.charAt(lineIndex-2)=='#'){
                            filled++;
                            // line2+="!2";
                           } 
                           if (line2.charAt(lineIndex+1)=='#'){
                            filled++;
                            // line2+="!3";
                           } 
                           if (line2.charAt(lineIndex+2)=='#'){
                            filled++;
                            // line2+="!4";
                           } 
                           if (filled==0){
                            // line2+="!5";
                            line3+='.';
                            // console.log('filled=2#');
                            filled=0;
                           }
                           if (filled==1){
                            // line2+="!5";
                            line3+='.';
                            // console.log('filled=2#');
                            filled=0;
                           }
                           if (filled==2){
                            // line2+="!5";
                            line3+='#';
                            // console.log('filled=2#');
                            filled=0;
                           }
                           if (filled==3){
                            // line2+="!6";
                            line3+='#';
                            // console.log('filled=3#');
                            filled=0;
                           }
                           if (filled==4){
                            // line2+="!6";
                            line3+='.';
                            // console.log('filled=3#');
                            filled=0;
                           }
                        } 
    
                        if (line2.charAt(lineIndex)=='#'){
                           if (line2.charAt(lineIndex-1)=='#'){
                            filled++;
                            // line2+="?1";
                           } 
                           if (line2.charAt(lineIndex-2)=='#'){
                            filled++;
                            // line2+="?2";
                           } 
                           if (line2.charAt(lineIndex+1)=='#'){
                            filled++;
                            // line2+="?3";
                           } 
                           if (line2.charAt(lineIndex+2)=='#'){
                            filled++;
                            // line2+="?4";
                           }    
                           if (filled==0){
                            // line2+="!5";
                            line3+='.';
                            // console.log('filled=2#');
                            filled=0;
                           }
                           if (filled==1){
                            // line2+="?5";
                            line3+='.';
                            // console.log('filled=2.');
                            filled=0;
                           }
                           if (filled==2){
                            // line2+="?5";
                            line3+='#';
                            // console.log('filled=2.');
                            filled=0;
                           }
                           if (filled==3){
                            // line2+="?5";
                            line3+='.';
                            // console.log('filled=2.');
                            filled=0;
                           }
                           if (filled==4){
                            // line2+="?6";
                            line3+='#';
                            // console.log('filled=3.');
                            filled=0;
                           }
                        }
                        //    case j:
                        //    lkl=2;
    
                        //    break;
    
                }

                for (var lineIndex=0,lineCh="", filled=0;lineIndex<lines[line].length-1;lineIndex++){
                        
                    if (line3.charAt(lineIndex)=='.'){
                
                       if (line3.charAt(lineIndex-1)=='#'){
                        filled++;
                        // line2+="!1";
                       } 
                       if (line3.charAt(lineIndex-2)=='#'){
                        filled++;
                        // line2+="!2";
                       } 
                       if (line3.charAt(lineIndex+1)=='#'){
                        filled++;
                        // line2+="!3";
                       } 
                       if (line3.charAt(lineIndex+2)=='#'){
                        filled++;
                        // line2+="!4";
                       } 
                       if (filled==0){
                        // line2+="?5";
                        line4+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==1){
                        // line2+="!5";
                        line4+='.';
                        // console.log('filled=2#');
                        filled=0;
                       }
                       if (filled==2){
                        // line2+="!5";
                        line4+='#';
                        // console.log('filled=2#');
                        filled=0;
                       }
                       if (filled==3){
                        // line2+="!6";
                        line4+='#';
                        // console.log('filled=3#');
                        filled=0;
                       }
                       if (filled==4){
                        // line2+="!6";
                        line4+='.';
                        // console.log('filled=3#');
                        filled=0;
                       }
                    } 

                    if (line3.charAt(lineIndex)=='#'){
                       if (line3.charAt(lineIndex-1)=='#'){
                        filled++;
                        // line2+="?1";
                       } 
                       if (line3.charAt(lineIndex-2)=='#'){
                        filled++;
                        // line2+="?2";
                       } 
                       if (line3.charAt(lineIndex+1)=='#'){
                        filled++;
                        // line2+="?3";
                       } 
                       if (line3.charAt(lineIndex+2)=='#'){
                        filled++;
                        // line2+="?4";
                       } 
                       if (filled==0){
                        // line2+="?5";
                        line4+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==1){
                        // line2+="?5";
                        line4+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==2){
                        // line2+="?5";
                        line4+='#';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==3){
                        // line2+="?5";
                        line4+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==4){
                        // line2+="?6";
                        line4+='#';
                        // console.log('filled=3.');
                        filled=0;
                       }
                    }
                    //    case j:
                    //    lkl=2;

                    //    break;

            } 
            for (var lineIndex=0,lineCh="", filled=0;lineIndex<lines[line].length-1;lineIndex++){
                    
                    if (line4.charAt(lineIndex)=='.'){
                
                       if (line4.charAt(lineIndex-1)=='#'){
                        filled++;
                        // line2+="!1";
                       } 
                       if (line4.charAt(lineIndex-2)=='#'){
                        filled++;
                        // line2+="!2";
                       } 
                       if (line4.charAt(lineIndex+1)=='#'){
                        filled++;
                        // line2+="!3";
                       } 
                       if (line4.charAt(lineIndex+2)=='#'){
                        filled++;
                        // line2+="!4";
                       } 
                       if (filled==0){
                        // line2+="?5";
                        line5+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==1){
                        // line2+="!5";
                        line5+='.';
                        // console.log('filled=2#');
                        filled=0;
                       }
                       if (filled==2){
                        // line2+="!5";
                        line5+='#';
                        // console.log('filled=2#');
                        filled=0;
                       }
                       if (filled==3){
                        // line2+="!6";
                        line5+='#';
                        // console.log('filled=3#');
                        filled=0;
                       }
                       if (filled==4){
                        // line2+="!6";
                        line5+='.';
                        // console.log('filled=3#');
                        filled=0;
                       }
                    } 

                    if (line4.charAt(lineIndex)=='#'){
                       if (line4.charAt(lineIndex-1)=='#'){
                        filled++;
                        // line2+="?1";
                       } 
                       if (line4.charAt(lineIndex-2)=='#'){
                        filled++;
                        // line2+="?2";
                       } 
                       if (line4.charAt(lineIndex+1)=='#'){
                        filled++;
                        // line2+="?3";
                       } 
                       if (line4.charAt(lineIndex+2)=='#'){
                        filled++;
                        // line2+="?4";
                       } 
                       if (filled==0){
                        // line2+="?5";
                        line5+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==1){
                        // line2+="?5";
                        line5+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==2){
                        // line2+="?5";
                        line5+='#';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==3){
                        // line2+="?5";
                        line5+='.';
                        // console.log('filled=2.');
                        filled=0;
                       }
                       if (filled==4){
                        // line2+="?6";
                        line5+='#';
                        // console.log('filled=3.');
                        filled=0;
                       }
                    }
                    //    case j:
                    //    lkl=2;

                    //    break;

            } 
                    
                
                // lineCh=lines[line].charAt(lineIndex);
                    // line2+=lineCh;
            
/*
            for (var lineIndex=0,lineCh="", filled=0;lineIndex<lines[line].length-1;lineIndex++){
                    
                switch (line2.charAt(lineIndex)){
                   case '.':
                   if (line2.charAt(lineIndex-1)=='#'){
                    filled++;
                   } 
                   if (line2.charAt(lineIndex-2)=='#'){
                    filled++;
                   } 
                   if (line2.charAt(lineIndex+1)=='#'){
                    filled++;
                   } 
                   if (line2.charAt(lineIndex+2)=='#'){
                    filled++;
                   } 
                   if (filled==2){
                    line3+='#';
                    // console.log('filled=2#');
                    filled=0;
                    break;
                   }
                   if (filled==3){
                    line3+='#';
                    // console.log('filled=3#');
                    filled=0;
                    break;
                   }
                   
                   case '#':
                   if (line2.charAt(lineIndex-1)=='#'){
                    filled++;
                   } 
                   if (line2.charAt(lineIndex-2)=='#'){
                    filled++;
                   } 
                   if (line2.charAt(lineIndex+1)=='#'){
                    filled++;
                   } 
                   if (line2.charAt(lineIndex+2)=='#'){
                    filled++;
                   } 
                   if (filled==2){
                    line3+='#';
                    // console.log('filled=2.');
                    filled=0;
                    break;
                   }
                   if (filled==4){
                    line3+='#';
                    // console.log('filled=3.');
                    filled=0;
                    break;
                   }

                   default:
                   line3+='.';
                   filled=0;
                   break;

                //    case j:
                //    lkl=2;

                //    break;

                }
                
            
            // lineCh=lines[line].charAt(lineIndex);
                // line2+=lineCh;
        };
        */
        
            
            // console.log(lines[line]);
/*
        //Toimii, käy läpi merkit ja tulostaa ne
        for (var lineIndex=0,lineCh="";lineIndex<lines[line].length;lineIndex++){
            lineCh=lines[line].charAt(lineIndex);
            line2+=lineCh;
        };
*/
        
        //     // console.log(line2); 
            // console.log(lineCh);
            // console.log(lines[line].length-1);
        //     // else
        //     break
        // lineCh="."||"#"
        // console.log(lines[line]);
        // console.log(lines[line]+"!");
        // else console.log(lines[line]);
